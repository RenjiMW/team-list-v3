import AppDescription from "../components/AppDescription";
import Button from "../components/button-components/Button";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function Starting() {
  return (
    <div className="bg-sky-950 text-sky-50 h-screen w-full flex flex-col items-center text-center">
      <div className="mt-10 py-1 px-10">
        <Logo />

        <div className="mt-8">
          <Button>
            <Link to="/lists">Get started</Link>
          </Button>
        </div>

        <div className="w-md mt-10">
          <AppDescription />
        </div>
      </div>
    </div>
  );
}

export default Starting;
