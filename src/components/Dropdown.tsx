import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown:React.FC<{ dropDown: boolean }> = ({ dropDown }) => {
    return (
      <aside
        className={
          dropDown
            ? "dropDownSection d-lg-none d-flex flex-column showDropDown"
            : "dropDownSection d-lg-none d-flex flex-column"
        }
      >
        <NavLink className="a" to="/">
          ALL PRODUCTS
        </NavLink>
        <NavLink className="a" to="/">
          ABOUT US
        </NavLink>
        <NavLink className="a" to="/">
          CONTACT US
        </NavLink>
        <NavLink className="a" to="/">
          QUESTIONS
        </NavLink>
        <NavLink className="a" to="/">
          COLLECTIONS
        </NavLink>
        <NavLink className="a" to="/">
          SEARCH
        </NavLink>
      </aside>
    );
}

export { Dropdown };