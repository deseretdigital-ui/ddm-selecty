import { PropTypes } from 'react';

export default {
  autofocus: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  autoSuggest: PropTypes.bool,
  disabled: PropTypes.bool,
  filterable: PropTypes.bool,
  filteredOptions: PropTypes.array,
  item: PropTypes.object,
  lazyLoading: PropTypes.bool,
  limit: PropTypes.number,
  loading: PropTypes.bool,
  name: PropTypes.string,
  noResults: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClicked: PropTypes.func,
  onFilter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  onFiltered: PropTypes.func,
  onSelected: PropTypes.func,
  optLabel: PropTypes.string,
  optValue: PropTypes.string,
  optionGroups: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        label: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        limit: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        label: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        limit: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      })
    ),
  ]),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  sortable: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  typedValue: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  visible: PropTypes.bool,
};
