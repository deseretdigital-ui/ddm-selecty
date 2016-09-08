import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { SuggestedItem } from './suggested-items/item.js';
import { SuggestedGroup, __RewireAPI__ as SuggestedGroupRewireAPI } from './';
SuggestedGroupRewireAPI.__Rewire__('SuggestedItem', SuggestedItem);

describe('<SuggestedGroup />', () => {
  it('should render a group of items with a label', () => {
    // Arrange
    const group = {
      label: 'A Group',
      items: [
        { label: 'option_one', value: 1 },
        { label: 'option_two', value: 2 },
        { label: 'option_three', value: 3 },
        { label: 'option_four', value: 4 },
      ],
    };
    const expectedOutput = '<div>A Group<div>option_one</div><div>option_two</div><div>option_three</div><div>option_four</div></div>';

    // Act
    const renderedComponent = shallow(
      <SuggestedGroup
        group={group}
        selected={[]}
        optLabel={'label'}
        optValue={'value'}
        onClicked={() => {}}
        contextTypes={null}
      />
    );

    // Assert
    expect(renderedComponent.html()).toEqual(expectedOutput);
  });

  it('should only render up-to {limit} suggested items', () => {
    // Arrange
    const limit = 2;
    const group = {
      label: 'A Group',
      items: [
        { label: 'option_one', value: 1 },
        { label: 'option_two', value: 2 },
        { label: 'option_three', value: 3 },
        { label: 'option_four', value: 4 },
      ],
    };
    // Act
    const renderedComponent = shallow(
      <SuggestedGroup
        limit={limit}
        group={group}
        selected={[]}
        optLabel={'label'}
        optValue={'value'}
        onClicked={() => {}}
        contextTypes={null}
      />
    );

    // Assert
    // expect(wrapper.find('div.some-class')).to.have.length(3);
    expect(renderedComponent.find('SuggestedItem').length).toEqual(limit);
  });
});
