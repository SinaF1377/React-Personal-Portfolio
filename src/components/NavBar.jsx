import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sina</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className="px-4 cursor-pointer 
            capitalize font-medium
            hover::scale-105 duration-200"
            >
              {item.link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer pr-10 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col items-center absolute top-0
        left-0 w-full min-h-0 bg-gradient-to-b from-black to-gray-800
        ">
          {links.map((item) => {
            return (
              <li
                key={item.id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {item.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
