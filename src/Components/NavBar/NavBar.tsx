import React, { useContext } from 'react';
import './NavBar.css'
import { NavBarOptions } from '../../Enums/NavBarEnum';

type NavBarProps = {
    navOnClick: (navBarOptions: NavBarOptions) => void;
    page: NavBarOptions;
}

function NavBar(props:NavBarProps) {
    return (
        <nav className="navbar">        
            <ul className="navbar-list">
            <li className="navbar-item">
                <button 
                    className={"navbar-link " + (props.page===NavBarOptions.About ?"active":"")} 
                    data-nav-link onClick={() => props.navOnClick(NavBarOptions.About)}
                >
                    About
                </button>
            </li>
            <li className="navbar-item">
                <button 
                    className={"navbar-link " + (props.page===NavBarOptions.Resume ?"active":"")} 
                    data-nav-link onClick={() => props.navOnClick(NavBarOptions.Resume)}
                >
                    Resume
                </button>
            </li>
            </ul>
        </nav>
    );
}

export default NavBar;