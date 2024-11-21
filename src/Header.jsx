import React from "react";

const Header = () => {
  return (
    <nav className=" lg:flex justify-between p-5 bg-red-600">
      <div>
        <p className="text-sm font-semibold"> {new Date().toISOString()}</p>
        <h2 className="text-sm font-semibold"> SoftCrayons Tech Solution </h2>
      </div>

      <input type="text" className=" outline-none text-black rounded-sm text-sm font-semibold mt-2 lg: w-80 h-5"placeholder="Sarch Item "/>
    </nav>
  );
};

export default Header;
