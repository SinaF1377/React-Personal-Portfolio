import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black
      to-gray-800 via-black"
      >
        <div
          className="text-white max-w-screen-lg mx-auto flex
          flex-col justify-center items-center h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold ">
              I'm a Blockchain Developer
            </h2>
            <p className="py-4 max-w-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              mollitia quisquam eligendi sapiente. Doloremque tempore
              accusantium nulla quo ad atque. Lorem ipsum dolor sit amet.
            </p>
            <div>
              <button
                className="group w-fit px-6 py-3 my-2
              flex items-center rounded-md bg-gradient-to-r
              from-cyan-500 to-blue-700 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="My profile"
              className="rounded-2xl
            mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
