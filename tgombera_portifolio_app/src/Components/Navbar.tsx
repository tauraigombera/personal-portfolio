import { useState } from "react";
function Navbar() {
  const navItems = ["Home", "About", "Projects"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <header className="bg-body py-6 sticky top-0">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-2xl">Taurai Gombera</div>
        <ul className="hidden md:flex space-x-12 items-centre">
          {navItems.map((navItem, index) => (
            <li
              className={selectedIndex === index ? "text-selected-text" : ""}
              key={navItem}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <li
                to={
                  navItem === "Home"
                    ? "/"
                    : `/${navItem.toLowerCase()}?selectedIndex=${index}`
                }
              >
                {navItem}
              </li>
            </li>
          ))}
          <a href="#hire">
            <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
          </a>
        </ul>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <div>
        <ul
          id="menu"
          className="hidden pb-6 relative text-white container mx-auto px-6 md:hidden"
        >
          <li>
            <a href="#" className="block py-2 px-4 text-selected-text">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="block py-2 px-4">
              Project
            </a>
          </li>

          <li>
            <a href="#hire" className="block py-2 px-4">
              Hire Me
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
}

export default Navbar;
