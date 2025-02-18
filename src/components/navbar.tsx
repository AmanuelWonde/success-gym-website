import { NavbarLists } from "../contents/navbar";
import logo from "../assets/bg-transparent-logo.png";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <nav className=" dark:bg-blackSecondary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} alt="" width={60} height={60} className="" />

          <span className=" text-primary self-center font-bold text-2xl  whitespace-nowrap">
            SUCCESS GYM
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setNavVisible(!navVisible)}
        >
          <MenuIcon />
        </button>
        <div
          className={`${navVisible ? "" : "hidden"} w-full md:block md:w-auto `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-blackSecondary md:dark:bg-blackSecondary dark:border-gray-700">
            {NavbarLists.map((list, index) => (
              <li
                key={index}
                className="  "
                onClick={() => setNavVisible(false)}
              >
                <a
                  href={list.link}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {list.label}
                </a>
              </li>
            ))}
            <li>
              {" "}
              <a href="#footer">
                {" "}
                <button className=" p-2 text-white rounded  font-semibold bg-primary">
                  Contact Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
