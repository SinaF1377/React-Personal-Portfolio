import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Bs7CircleFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedinIn className="bg-white text-black" size={25} />
        </>
      ),
      href: "https://linkdin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub className="bg-white text-black" size={25} />
        </>
      ),
      href: "https://github.com",
      style: "",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <Bs7CircleFill className="bg-white text-black" size={25} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill className="bg-white text-black" size={25} />
        </>
      ),
      href: "https://linkdin.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 rounded ml-[-110px] hover:ml-[0px] duration-500" +
                  " " +
                  item.style
                }
              >
                <a
                  href={item.href}
                  className="flex justify-between items-center w-full text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
