import { Link } from "react-router-dom";
import Button from "./button-components/Button";

function Nav() {
  return (
    <div className="flex justify-center items-center gap-5 h-16 w-full bg-slate-900">
      <Button>
        <Link to="/">Back</Link>
      </Button>
      <Button>
        <Link to="/">User Manual</Link>
      </Button>
      <Button>
        <Link to="/">Field Display</Link>
      </Button>
    </div>
  );
}

export default Nav;
