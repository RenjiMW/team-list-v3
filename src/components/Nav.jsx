import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button-components/Button";
import logo from "../assets/imgs/Logo1.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center xl:justify-center xl:gap-150 h-16 w-full bg-slate-900 px-4 md:px-8">
      {/* Logo */}
      <section className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20" />
        </Link>
      </section>

      {/* Menu desktop */}
      <section className="hidden xs:flex gap-5">
        <Button>
          <Link to="/lists">Lists</Link>
        </Button>
        <Button>
          <Link to="/field">Field Display</Link>
        </Button>
        <Button>
          <Link to="/manual">User Manual</Link>
        </Button>
      </section>

      {/* Hamburger (mobile only) */}
      <div className="xs:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Dropdown menu mobile */}
      {isOpen && (
        <section className="absolute top-16 right-0 w-48 bg-slate-800 flex flex-col items-start p-4 gap-3 xs:hidden rounded-b-lg shadow-lg">
          <Button onClick={() => setIsOpen(false)}>
            <Link to="/lists">Lists</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            <Link to="/field">Field Display</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            <Link to="/manual">User Manual</Link>
          </Button>
        </section>
      )}
    </nav>
  );
}

export default Nav;
