import React, { useState } from "react";
import {  FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+201012304563" },
    { icon: "icon-email.svg", text: "example@gmail.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="#">
          <img
            src="/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              incidunt hic libero voluptas, cum eveniet! Quasi dolore saepe unde
              iste ab molestias.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex  items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/images/${item.icon}`}
                  alt="phone-icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-primaryColor transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex gap-[15px] w-full justify-center md:w-auto">
              {socialIcons.map((icon) => (
                <li key={icon}>
                  <a href="#" className="group">
                    <div className="w-[40px] h-[40px] element-center  border border-white rounded-full">
                      {icon === "facebook" ? (
                        <FaFacebookF className="group-hover:text-primaryColor transition duration-200"/>
                      ) : icon === "twitter" ? (
                        <FaTwitter className="group-hover:text-primaryColor transition duration-200"/>
                      ) : (
                        <FaInstagram className="group-hover:text-primaryColor transition duration-200"/>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
