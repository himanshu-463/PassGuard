import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white overflow-hidden">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Guard/&gt;</span>
        </div>
        <button className="text-white bg-green-500 my-5 rounded-full flex justify-between items-center ring-white ring-1">
          <img className="w-10 invert p-1" src="/github.svg" alt="github logo"></img>
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
