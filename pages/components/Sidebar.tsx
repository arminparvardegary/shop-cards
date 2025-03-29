import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="text-[#586053] text-2xl focus:outline-none cursor-pointer hover:opacity-70"
      >
        <img
          src="./menu.svg"
          className="w-8 h-8"
          alt="Menu Icon"
        />
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-90 shadow-lg bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-6 p-2 text-[#586053] font-bold text-4xl cursor-pointer hover:opacity-70 rounded-full"
          >
            ✕
          </button>
          <ul className="p-10 mt-30">
            <li className="py-5 text-2xl"><a className=" cursor-pointer hover:opacity-70" href="#">Projects</a></li>
            <li className="py-5 text-2xl"><a className=" cursor-pointer hover:opacity-70" href="#">Hardware</a></li>
            <li className="py-5 text-2xl"><a className=" cursor-pointer hover:opacity-70" href="#">Finishes</a></li>
            <li className="py-5 text-2xl"><a className=" cursor-pointer hover:opacity-70" href="#">Services</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;