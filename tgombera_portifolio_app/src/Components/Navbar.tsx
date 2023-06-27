import MobileMenu from "./MobileMenu";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navItems = ["Home", "About", "Projects"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const location = useLocation();

  const navRef = useRef<HTMLButtonElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("open");
    setVisibleNavbar(!visibleNavbar);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedIndex = searchParams.get("selectedIndex");
    if (storedIndex !== null) {
      setSelectedIndex(parseInt(storedIndex));
    }
  }, [location.search]);

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
              <Link
                to={
                  navItem === "Home"
                    ? "/"
                    : `/${navItem.toLowerCase()}?selectedIndex=${index}`
                }
              >
                {navItem}
              </Link>
            </li>
          ))}
          <a href="#hire">
            <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
          </a>
        </ul>
        <button
          ref={navRef}
          onClick={showNavbar}
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {visibleNavbar && <MobileMenu />}
    </header>
  );
}

export default Navbar;
