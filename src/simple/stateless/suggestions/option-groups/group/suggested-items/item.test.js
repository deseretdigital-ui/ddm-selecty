import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { SuggestedItem } from './item';
import classNames from 'classnames';

const applied = classNames({
  item: true,
  selected: false,
});

const ITEMS = [];
const ITEM = { label: 'option_one', value: 1 };
const LABEL = 'label';

describe('<SuggestedItem />', () => {
  it('should render an item unhighlighted', () => {
    const renderedComponent = shallow(
      <SuggestedItem
        items={ITEMS}
        item={ITEM}
        onClicked={() => {}}
        label={LABEL}
      />
    );
    expect(renderedComponent.contains(
      <div styleName={applied}>
        {ITEM[LABEL]}
      </div>
    )).toEqual(true);
  });
});

// <div styleName={applied} onClick={() => onClicked(ITEM)}>
//   {ITEM[LABEL]}
// </div>
