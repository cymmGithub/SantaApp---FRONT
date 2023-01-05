import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';



export const Header = () => {

    const colorOfLink = ({ isActive }: {
        isActive: boolean,
    }) => ({ color: isActive ? 'green' : 'red' });

    return <div className="Header__style">
        <h1 className='App__title'>Santa App</h1>

        Menu:  <NavLink style={colorOfLink} to="/child">Switch to Childs</NavLink> |  <NavLink style={colorOfLink} to="/gift">Switch to Gifts</NavLink>
        <hr />

    </div>
}