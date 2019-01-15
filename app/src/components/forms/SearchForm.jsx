import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import './SearchForm.scss';
import SearchFormMenu from './SearchFormMenu';
import SearchFormMenuList from './SearchFormMenuList';
import SearchFormNoOptionsMessage from './SearchFormNoOptionsMessage';
import SearchFormOption from './SearchFormOption';
import SearchFormOptionsFilter from '../../filters/SearchFormOptionsFilter';


export default class SearchForm extends Component {
  render() {
    return (
        <AsyncSelect
            loadOptions={SearchFormOptionsFilter}
            isMulti
            isClearable={false}
            placeholder={'Start typing to search'}
            classNamePrefix="searchForm"
            className="searchForm"
            components={{
              Menu: SearchFormMenu,
              MenuList: SearchFormMenuList,
              NoOptionsMessage: SearchFormNoOptionsMessage,
              Option: SearchFormOption
            }}
        />
    );
  }

}
