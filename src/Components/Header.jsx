import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="shadow-md bg-slate-700">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <Link to="/">
          <div className="flex flex-wrap font-bold text-sm:text-xl">
            <span className="">
              <img src="./Photo/1.jpg" alt="logo" height={70} width={70} />
            </span>
          </div>
        </Link>
        <form className="flex items-center bg-slate-100 p-3rounded-lg">
          <FaSearch className="text-black" />
          <input
            type="text"
            placeholder="search..."
            className="w-24 bg-transparent focus:outline-none sm:w-64 "
          />
        </form>
        <ul className="hidden gap-4 lg:flex ">
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
