import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center  w-full">
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">Guard/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with{" "}
        <img className="w-7 mx-2" src="/heart.png" alt="heart"></img>by Himanshu
      </div>
    </div>
  );
};

export default Footer;
