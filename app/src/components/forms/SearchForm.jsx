import React, { Component, Fragment } from 'react';
import Select, { components } from 'react-select';
import './SearchForm.scss';

function getLength(options) {
  return options.reduce((acc, curr) => {
    if (curr.options) return acc + getLength(curr.options);
    return acc + 1;
  }, 0);
};

const Menu = (props) => {
  const optionsLength = getLength(props.options);
  console.log('@@@ Menu', optionsLength, props);
  return (
      <Fragment>
        <div className="suggestTitle">Suggested</div>
        <components.Menu {...props}>
          {props.children}
        </components.Menu>
      </Fragment>
  );
};


const options = [
  { value: 'Random', label: 'Random' },
  { value: 'Real', label: 'Real' },
  { value: 'Record', label: 'Record' },
  { value: 'Red', label: 'Red' },
  { value: 'Report', label: 'Report' }
];

export default class SearchForm extends Component {
  render() {
    return (
        <Select options={options}
                isMulti
                defaultMenuIsOpen
                isClearable={false}
                placeholder={'Start typing to search'}
                classNamePrefix="searchForm"
                className="searchForm"
                components={{ Menu }}
        />
    );
  }

}
