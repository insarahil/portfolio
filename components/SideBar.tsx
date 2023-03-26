import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

function SideBar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        src="https://headshotlove.com/wp-content/uploads/2012/08/MG_2266-e1554234810391.jpg"
        alt="Raheel Ur Rehman"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Raheel </span>
        Ur Rehman
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        {" "}
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Adress */}
      <div
        className="py-4 my-4 bg-gray-200 dark:bg-dark-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center px-2 py-1 my-3 space-x-2">
          <GoLocation />
          <span>Attock, Pakistan</span>
        </div>
        <p className="my-2">insa-rahil@hotmail.com</p>
        <p className="my-2">+923165310088 / +923149333668</p>
      </div>

      {/* Buttons */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none"
        onClick={() => (location.href = "mailto:insa-rahil@hotmail.com;")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500"
      >
        Toogle Theam
      </button>
    </div>
  );
}

export default SideBar;
