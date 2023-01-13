import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const colorOfLink = ({ isActive }: { isActive: boolean }) => ({
    borderRadius: "5px",
    transparency: "50%",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#1DA1F2" : "gray",
  });

  return (
    <div className="Header_container">
      <img className="Santa_img" src="https://i.imgur.com/6J1DpOn.png" alt="" />

      <h1 className="Header__title">Santa App</h1>
      <span className="Header__NavLink">
        Menu:{" "}
        <NavLink style={colorOfLink} to="/child">
          Switch to Childs
        </NavLink>{" "}
        |{" "}
        <NavLink style={colorOfLink} to="/gift">
          Switch to Gifts
        </NavLink>
        <hr />
      </span>
    </div>
  );
};
