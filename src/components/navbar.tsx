import { NavbarLists } from "../contents/navbar";
import logo from "../assets/bg-transparent-logo.png";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-secondary h-[100px] px-6">
      <a href="#home" className=" bg-secondary">
        {" "}
        <img src={logo} alt="" width={100} height={100} className="" />
      </a>

      <div className=" hidden md:block">
        <ul className=" flex gap-6">
          {NavbarLists.map((list, index) => (
            <li key={index} className="  ">
              <a
                href={list.link}
                className=" hover:hover:text-primary text-white font-semibold"
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
  );
};

export default Navbar;
