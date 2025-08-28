import Button from "./button-components/Button";

function Approval({ onCancel, onConfirm, playerName }) {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center h-screen w-full bg-black/50">
      <div className="relative border-2 text-left size-max  bg-sky-950 px-8 pt-8 pb-7">
        <p>
          Czy jesteś pewny, że chcesz całkowicie usnąć gracza:{" "}
          <span className="font-bold">{playerName}</span>?
        </p>
        <div className="flex justify-center gap-10 mt-5">
          <Button onClick={() => onConfirm()}>Tak ✅</Button>
          <Button onClick={() => onCancel()}>Nie ↪</Button>
        </div>
      </div>
    </div>
  );
}

export default Approval;
