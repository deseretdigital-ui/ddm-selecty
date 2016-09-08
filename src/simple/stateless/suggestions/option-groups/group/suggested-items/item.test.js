import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { SuggestedItem } from './item';

describe('<SuggestedItem />', () => {
  it('should render an item unhighlighted', () => {
    // Arrange
    const item = { label: 'option_one', value: 1 };
    const expectedOutput = '<div>option_one</div>';

    // Act
    const renderedComponent = shallow(
      <SuggestedItem
        selected={{}}
        item={item}
        onClicked={() => {}}
        optLabel="label"
        optValue="value"
      />
    );

    // Assert
    expect(renderedComponent.prop('styleName')).toEqual('item');
    expect(renderedComponent.html()).toEqual(expectedOutput);
  });

  it('should render an item highlighted', () => {
    // Arrange
    const item = { label: 'option_one', value: 1};

    // Act
    const renderedComponent = shallow(
      <SuggestedItem
        selected={item}
        item={item}
        onClicked={() => {}}
        optLabel="label"
        optValue="value"
      />
    );

    // Assert
    expect(renderedComponent.prop('styleName')).toEqual('item selected');
  });

  it('onClicked callback should be called on click event', () => {
    // Arrange
    const item = { label: 'option_one', value: 1 };
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(
      <SuggestedItem
        selected={{}}
        item={item}
        onClicked={onClickSpy}
        optLabel="label"
        optValue="value"
      />
    );

    // Act
    renderedComponent.simulate('click');

    // Assert
    expect(onClickSpy).toHaveBeenCalled();
  });

});
