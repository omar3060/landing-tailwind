import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import './Header.css'
const Header = () => {
  const headerRef = useRef(null)
  const [links, setLinks] = useState(["Features", "Team", "Sign In"]);

  useEffect(()=>{
    const handleScroll = throttle(()=> {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <header ref={headerRef} className="header-initial fixed top-0 left-0 w-full z-50 transition-all duration-200">
      <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                {/* <a href={`/${link.toLowerCase().split(' ').join('')}`}>{link}</a> */}
                <a
                  href={`/${link.toLowerCase().replaceAll(" ", "")}`}
                  className="text-white opacity-[0.9] hover:underline hover:opacity-[1] transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
