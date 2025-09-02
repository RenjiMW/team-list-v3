import simpleLogo from "../assets/imgs/simple-logo.png";

function Logo() {
  return (
    <div>
      <div className="flex justify-center items-end">
        <img className="" src={simpleLogo} alt="Simplified logo" />
        <h1 className="font-bold text-3xl">Squad Builder</h1>
      </div>
      <h3 className="mt-1">SIMPLE RUGBY TEAM MANAGER</h3>
    </div>
  );
}

export default Logo;
