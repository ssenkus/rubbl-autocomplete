import { components } from 'react-select';
import React, { Fragment } from 'react';

const SearchFormMenuList = (props) => {
  return (
      <Fragment>
        <components.MenuList {...props}>
          {props.children}
        </components.MenuList>
        <div className="suggestGradient"></div>
      </Fragment>
  );
};

export default SearchFormMenuList;
