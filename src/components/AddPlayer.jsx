import { useState } from "react";
import { usePlayers } from "../hooks/usePlayers";

///////////////////////////////////////////////
/// AddPlayer function
function AddPlayer({ closeModal }) {
  const { avatarsArr } = usePlayers();
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedAvatar, setSelectedAvatar] = useState(false);
  const { createPlayer } = usePlayers();
  const [error, setError] = useState("");

  function handleSelectedOption(value) {
    setSelectedOption(value);
    if (value !== "default") {
      setSelectedAvatar(false);
    }
  }

  ////////////////////////////////
  //////// handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setError("Podaj imię");
      return;
    }

    if (selectedOption === "pick" && !selectedAvatar) {
      setError("Select an avatar or use another option");
      return;
    }

    const newPlayer = {
      name,
      avatarType: selectedOption,
      avatarIdx: selectedAvatar,
      avatarUrl,
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

  //////////////////////////////////////////////
  /////////// =========== JSX
  return (
    <>
      <div className="absolute z-10 flex items-center justify-center h-screen w-full bg-black/50">
        <div className="relative border-2 rounded-2xl text-left size-max  bg-sky-950 px-6 py-5">
          <h1 className="font-bold text-lg text-center mb-3">
            Add a new player
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-end justify-center">
              {/* ================= NAME INPUT FIELD ================= */}
              <div className="mr-[20%]">
                <label htmlFor="name">Name :</label>
                <input
                  id="name"
                  type="text"
                  className="bg-amber-50 ml-1.5 text-black px-1.5"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                ></input>
              </div>

              {/* ================= DROPDOWN MENU ================= */}
              <div className="mr-[20%] my-3">
                <label htmlFor="avatar">Avatar :</label>
                <select
                  id="avatar"
                  value={selectedOption}
                  onChange={(e) => handleSelectedOption(e.target.value)}
                  className="bg-white text-black rounded-l min-w-48
                 ml-1.5"
                >
                  <option value="default">Default avatar</option>
                  <option value="pick">Pick avatar</option>
                  <option value="urlAddress">Add URL address</option>
                </select>
              </div>

              {/* ================= IMG SELECTION ================= */}
              <div className="w-100 flex justify-center">
                {selectedOption === "pick" && (
                  <div className="flex flex-wrap justify-center gap-2 w-50 min-h-min pb-5 pt-2">
                    {avatarsArr.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedAvatar(idx)}
                        className={`${
                          selectedAvatar === idx
                            ? "border-3 border-sky-400"
                            : "border-1 border-slate-400"
                        }  bg-white size-15 rounded-sm`}
                      >
                        <img
                          src={img}
                          alt={`avatar${idx + 1}`}
                          width={40}
                          className="object-cover object-top w-full h-full rounded-sm"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* ================= URL INPUT FIELD ================= */}
                {selectedOption === "urlAddress" && (
                  <div className="h-15 flex flex-col justify-center items-end">
                    <div>
                      <label htmlFor="imageURL">Image URL :</label>
                      <input
                        id="imageURL"
                        type="text"
                        placeholder=" https://..."
                        className="bg-amber-50 ml-1.5  text-black px-1.5"
                        onChange={(e) => setAvatarUrl(e.target.value)}
                        value={avatarUrl}
                      ></input>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ===================== BUTTONS ===================== */}
            <div className="flex justify-center mt-5">
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

            {/* ================== ERROR MESSAGE ================== */}
            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPlayer;
