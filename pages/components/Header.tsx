import React from "react";
import Sidebar from "../components/Sidebar";

const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="container flex justify-between w-full mb-5 mt-5">
        <div className="font-bold text-2xl">LOGO</div>
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;