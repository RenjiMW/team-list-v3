import { Link } from "react-router-dom";
import Button from "./button-components/Button";
import logo from "../assets/imgs/Logo1.png";

function Nav() {
  return (
    <div className="flex justify-center items-center md:gap-10 lg:gap-120 xl:gap-150 h-16 w-full bg-slate-900">
      <section className="flex justify-center items-center gap-5 ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-25" />
        </Link>
      </section>
      <section className="flex justify-center items-center gap-5">
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
    </div>
  );
}

export default Nav;
