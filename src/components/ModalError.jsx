import Button from "./button-components/Button";
import backIcon from "../assets/imgs/back-icon.png";

function ModalError({ error, setError }) {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center h-screen w-full bg-black/50">
      <div className="relative border-2 rounded-lg text-left size-max m-4 bg-sky-950 px-8 pt-8 pb-7">
        <p>{error}</p>
        <div className="flex justify-center gap-10 mt-5">
          <Button onClick={() => setError("")}>
            Back <img src={backIcon} className="inline" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalError;
