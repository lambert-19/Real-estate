import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-slate-700 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto ">
        <Link to="/">
          <div className="font-bold text-sm:text-xl flex flex-wrap">
            <span className="">
              <img src="./Photo/1.jpg" alt="logo" height={70} width={70} />
            </span>
          </div>
        </Link>
        <form className="bg-slate-100 p-3rounded-lg flex items-center">
          <FaSearch className="text-black" />
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-200 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-slate-200 hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-200 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
