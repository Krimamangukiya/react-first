import React from "react";
import Mainbody from "./Mainbody";
function Navbar() {
  return (
    <>
      <div className="w-100 flex">
        <div className="w-50">
          <img className="logo" src="https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e" ></img>
        </div>
        <div className="w-50 flex j-end">
          <a href="#" className="menu"><h3>Docs</h3></a>
          <a href="#" className="menu"><h3>About</h3></a>
          <button ><h4>SUPPORT US</h4></button>
        </div>
      </div>
      <Mainbody />
    </>
  )
}
export default Navbar