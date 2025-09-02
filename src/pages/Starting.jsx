import AppDescription from "../components/AppDescription";
import Button from "../components/button-components/Button";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import pitchPhoto from "../assets/imgs/pitchPhoto.png";

function Starting() {
  return (
    <div className="min-h-dvh bg-sky-950">
      <section
        className="
          relative 
          min-h-dvh 
          w-full 
          bg-cover bg-center
          text-sky-50
        "
        style={{ backgroundImage: `url(${pitchPhoto})` }}
      >
        <div className="absolute inset-0 bg-sky-950/60" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mt-10 py-1 px-2 xxs:px-5 sm:px-10 max-w-screen-md">
            <Logo />

            <div className="mt-8">
              <Button className="w-[200px]">
                <Link to="/lists">Get started</Link>
              </Button>
            </div>
            <p className="mt-3">or try</p>
            <div className="mt-3">
              <Button className="w-[200px]">
                <Link to="/lists/lists?demo=1">Demo version</Link>
              </Button>
            </div>

            <div className="max-w-md mt-10">
              <AppDescription />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Starting;

// FIXME: dodać exit demo?
