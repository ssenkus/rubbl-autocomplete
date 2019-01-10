import React, { Component } from 'react';
import Select from 'react-select';

/* Input */
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
                placeholder={'Start typing to search'}
        />
    );
  }

}
