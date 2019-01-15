import { components } from 'react-select';
import React, { Fragment } from 'react';

const SearchFormOption = (props) => {
  // TODO: add option text highlighting using "props.selectProps.inputValue";
  return (
      <Fragment>
        <components.Option {...props}>
        </components.Option>
      </Fragment>
  );
};

export default SearchFormOption;
