import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ nav }) => {

    const { strCategory } = nav;
    // console.log(nav)
    return (
        <div>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-extrabold ml-5 text-lg' : 'decoration-solid ml-5 text-lg'} to={`/meals/${strCategory}`} > {strCategory}</NavLink>
            </nav>
        </div >
    );
};

export default Header;