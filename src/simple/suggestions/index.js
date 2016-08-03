import React, { PropTypes } from 'react'
// import css from './suggestionsStyles'
import SuggestedGroup from '../option-groups/group'

const defaultGroup = {
  order: 1,
  value: '__default__',
  label: '',
  items: []
}

class Suggestions extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    visible: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string.isRequired,
    displayField: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired,
    optgroups: PropTypes.array,
    selected: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this._filter = this._filter.bind(this);
    this._sort = this._sort.bind(this);
    let optgroupHash = {};
    let optgroups = [];
    let groupsProvided = false;

    if (this.props.optgroups) {
      optgroups = this.props.optgroups;
      optgroups.push(defaultGroup);
      groupsProvided = true;
    } else {
      optgroups = [defaultGroup];
    }

    for (var i = 0; i < optgroups.length; i++) {
      let group = optgroups[i];
      group.items = [];
      optgroupHash[group.value.toLowerCase()] = group;
    }

    this.state = {
      optgroups,
      optgroupHash,
      groupsProvided
    };
  }

  componentDidMount () {
    this._filter(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if((nextProps.searchTerm != this.props.searchTerm) || (nextProps.options != this.props.options)) {
       this._filter(nextProps);
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    var propsChange = (nextProps.visible != this.props.visible) ||
                      (nextProps.displayField != this.props.displayField);
    var stateChange = (nextState !== this.state);
    return (propsChange || stateChange);
  }

  _filter (props) {
    let key = props.displayField;
    let {searchTerm, options} = props;
    let proceed = options ? (options.length > 0) : false;

    if(searchTerm != '' && proceed){
      let term = searchTerm.toLowerCase();
      let filteredResults = options.filter((result) => {
        let lowerResult = result[key].toLowerCase();
        return lowerResult.indexOf(term) > -1;
      });
      filteredResults = this._sort(props, filteredResults);
      filteredResults = this._optgroup(props, filteredResults);
      this.setState({results: filteredResults});
    } else if (!this.state.results){
        let results = this._optgroup(props, props.options);
        this.setState({results: results});
    } else {
      let results = this._optgroup(props, props.options);
      this.setState({results});
    }
  }

  _sort (props, results) {
    let term = props.searchTerm.toLowerCase();
    //TODO Reduce calls toLowerCase function
    function compare (a, b) {
      let displayFieldA = a[props.displayField];
      let displayFieldB = b[props.displayField];
      let sortA = displayFieldA.toLowerCase().indexOf(term);
      let sortB = displayFieldB.toLowerCase().indexOf(term);

      if (sortA === sortB) {
        return displayFieldA.localeCompare(displayFieldB);
      }
      return (sortA > sortB ? 1 : -1);
    }
    return results.sort(compare);
  }

  _optgroup (props, results) {
    let {optgroupHash} = this.state;

    // Clearing out items
    Object.keys(optgroupHash).map((groupName, index) => {
      optgroupHash[groupName].items = [];
    });

    if (!this.state.groupsProvided) {
      optgroupHash["__default__"].items = (results ? results : []);
    } else {
      if(results) {
        for (var i=0; i< results.length; i++) {
          let item = results[i];
          if (!item.group) {
            item.group = "__default__";
          }
          optgroupHash[item.group.toLowerCase()].items.push(item);
        }
      }
    }

    return optgroupHash;
  }

  render() {
    let {displayField, select, visible, options, selected} = this.props;
    let {results} = this.state;
    if (results) {
      if (Object.keys(results).length > 0) {
        // style={[css.suggestion, css.norm, visible && css.show]}
        return (
          <div >
            {
              Object.keys(this.state.results).map(
                (groupName, index) => (
                  <SuggestedGroup
                    group={results[groupName]}
                    select={select}
                    selected={selected}
                    displayField={displayField}
                    key={index}
                  />
                )
              )
            }
          </div>
        )
      } else {
        // style={[css.norm, visible && css.show]}
        return (
          <div>
            No results found.
          </div>
        );
      }
    } else {
      // style={[css.norm, visible && css.show]}
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}
 // className={classNames(resultSetClasses)}
 // <div key={index}>
 //   {item.name}
 // </div>

export default Suggestions;
