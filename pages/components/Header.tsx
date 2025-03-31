import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Header: React.FC<{
  selectedData: {
    id: number;
    title: string;
    image: string;
    quantity: number;
  }[];
  onRemoveCart: (id: number) => void;
}> = ({ selectedData = [], onRemoveCart }) => { // Add default value for selectedData
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible((visible) => !visible);
  };

  return (
    <header className="flex justify-center">
      <div className="container flex justify-between w-full mb-5 mt-5">
        <div className="font-bold text-2xl">LOGO</div>
        <div className="flex justify-center gap-2">
          <div
            onClick={toggleModal}
            className="relative"
          >
            <img
              className="w-6 mr-5 cursor-pointer hover:opacity-70"
              src="../shop.svg"
              alt="shop card"
            />
            <span className="absolute bottom-0 -left-2 bg-[#586053] w-5 h-5 text-center text-white text-sm  rounded-full">
              {selectedData.length}
            </span>
          </div>
          <Sidebar />
        </div>
      </div>

      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="w-200 h-200 bg-white flex justify-center relative">
            <div className="w-full flex flex-col justify-start mt-30">
              {selectedData && selectedData.length > 0 ? (
                selectedData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-10 border-b-1 border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-30 h-30 object-cover"
                    />
                    <div className="flex justify-between">
                      <p className="font-bold">{item.title}</p>
                      <p className="bg-[#586053] w-7 h-7 text-center text-white pt-0.5 rounded-full ml-4">
                        {item.quantity}
                      </p>
                    </div>
                    <span
                      onClick={() => onRemoveCart(item.id)}
                      className="text-red-500 px-2 py-1 cursor-pointer hover:opacity-70 rounded"
                    >
                      Remove
                    </span>
                  </div>
                ))
              ) : (
                <p className="flex item-center justify-center text-lg">
                  No Products
                </p>
              )}
            </div>
            <button
              onClick={toggleModal}
              className="absolute top-6 left-8 text-[#586053] font-bold text-4xl cursor-pointer hover:opacity-70 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
