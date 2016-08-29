import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import classNames from 'classnames';
import { SuggestedItem } from './item';


describe('<SuggestedItem />', () => {
  it('should render an item unhighlighted', () => {
    // Arrange
    const item = { label: 'option_one', value: 1 };
    const expectedOutput = '<div class="item">option_one</div>';

    // Act
    const renderedComponent = shallow(
      <SuggestedItem
        items={[]}
        item={item}
        onClicked={null}
        optLabel="label"
        optValue="value"
      />
    );

    // Assert
    expect(renderedComponent.html()).toEqual(expectedOutput);
  });

  it('should render an item highlighted', () => {
    // Arrange
    const item = { label: 'option_one', value: 1 };

    // Act
    const renderedComponent = shallow(
      <SuggestedItem
        items={[item]}
        item={item}
        onClicked={null}
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
        items={[]}
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
