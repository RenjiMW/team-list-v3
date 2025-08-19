import { useState } from "react";
import { usePlayers } from "../hooks/usePlayers";

function AddPlayer({ closeModal }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const { createPlayer } = usePlayers();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setError("Podaj imię");
      return;
    }

    const newPlayer = {
      name,
      avatar,
    };
    console.log("Adding new player:", newPlayer);
    const result = createPlayer(newPlayer);

    if (!result.ok) {
      setError("Taki zawodnik już jest na liście.");
    } else if (result.ok) {
      setError("");
      setName("");
      closeModal();
    }
  }

  return (
    <>
      <div className="absolute z-10 flex items-center justify-center h-screen w-full bg-black/50">
        <div className="relative border-2 text-left size-max  bg-sky-950 p-3">
          <form onSubmit={handleSubmit}>
            <div className="my-2 w-full">
              <label htmlFor="Name/Nickname">Name/Nickname</label>
              <input
                id="Name/Nickname"
                type="text"
                className="bg-amber-50 ml-1.5 text-black px-1.5"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
            </div>

            <div className="my-2 w-full">
              <label htmlFor="ImageURL">Image URL</label>
              <input
                id="ImageURL"
                type="text"
                placeholder="optional"
                className="bg-amber-50 ml-1.5  text-black px-1.5"
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              ></input>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-bold border-2 px-1 py-0.5 rounded-md cursor-pointer bg-blue-800 hover:bg-blue-700 mr-5 w-20"
              >
                OK
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="text-bold border-2 px-1 py-0.5 rounded-md  cursor-pointer bg-blue-800 hover:bg-blue-700 w-20"
              >
                CANCEL
              </button>
            </div>

            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPlayer;
