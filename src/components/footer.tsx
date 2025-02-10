import { Clock11Icon, MailIcon, MapPinIcon, Phone } from "lucide-react";
import logo from "../assets/bg-transparent-logo.png";
import { contacts, socialMedias } from "../contents/footer";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className=" w-full p-16 md:flex justify-between bg-secondary text-white space-y-12">
        <div className=" md:flex space-y-2 gap-6">
          <img src={logo} alt="" className=" w-[200px] h-[200px]" />
          <div className=" flex gap-4 pt-10">
            <Clock11Icon className=" text-primary" />
            <ul className=" space-y-2 ">
              <li>
                <p className=" text-lg font-semibold">Monday-Friday</p>
                <p className=" text-gray-400">5:00AM - 9:00PM</p>
              </li>
              <li>
                <p className=" text-lg font-semibold">Saturday-Sunday</p>
                <p className="text-gray-400">5:00AM - 9:00PM</p>
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className=" flex flex-col gap-6"
          id="contact-us"
        >
          <h1 className=" text-xl font-bold">
            {" "}
            <span className=" border-b-2 border-primary ">Contact</span> Us
          </h1>
          <ul className=" space-y-3">
            <li className=" flex gap-6">
              <MapPinIcon className=" text-primary" />
              <p className=" text-gray-300 w-80">{contacts.address}</p>
            </li>
            <li className=" flex gap-6">
              <Phone className=" text-primary" />
              <p className=" text-gray-300">
                {contacts.phones.map((phone, index) => (
                  <React.Fragment key={index}>
                    {phone}
                    <br />
                  </React.Fragment>
                ))}{" "}
              </p>
            </li>
            <li className=" flex gap-4">
              <MailIcon className=" text-primary" />
              <p className=" text-gray-300">{contacts.email}</p>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className=" flex flex-col gap-6"
        >
          <h1 className=" text-lg font-bold">
            {" "}
            <span className=" border-b-2 border-primary">Follow</span> Us
          </h1>
          <ul className=" flex flex-col gap-2">
            {socialMedias.map((social) => (
              <li>
                <a href={social.link} className=" text-lg font-semibold">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className=" text-center text-white bg-blackSecondary p-8">
        @2025 All right reserved. Powered by{" "}
        <a href="https://wegegtatech.com " className=" text-yellow-500">
          Wegegta Technologies
        </a>
      </p>
    </footer>
  );
};

export default Footer;
