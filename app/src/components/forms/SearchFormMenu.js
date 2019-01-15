import { components } from 'react-select';
import React, { Fragment } from 'react';

const SearchFormMenu = (props) => {
  return (
      <Fragment>
        <div className="suggestWrapper">
          <div className="suggestTitle">Suggested</div>
          <components.Menu {...props}>
            {props.children}
          </components.Menu>
        </div>
      </Fragment>
  );
};

export default SearchFormMenu;
