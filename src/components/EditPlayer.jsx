import { useEffect, useState } from "react";
import { usePlayers } from "../hooks/usePlayers";
import Button from "./button-components/Button";
import backIcon from "../assets/imgs/back.svg";
import saveIcon from "../assets/imgs/save.svg";

function EditPlayer({ onCloseEdit, player }) {
  const { editPlayer, avatarsArr } = usePlayers();
  const [curPlayer, setCurPlayer] = useState(player);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("current");
  const [selectedAvatar, setSelectedAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (selectedOption === "current") {
      setAvatar(player.avatar);
    } else if (selectedOption === "pick") {
      setAvatar(avatarsArr[selectedAvatar]);
    } else if (selectedOption === "default") {
      setAvatar(avatarsArr[2]);
    } else if (selectedOption === "urlAddress") {
      setAvatar(avatarUrl);
    }
  }, [selectedOption, avatarUrl, avatarsArr, selectedAvatar, player.avatar]);

  function handleSelectedOption(value) {
    setSelectedOption(value);
    if (value !== "default") setSelectedAvatar(false);
  }

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCurPlayer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedPlayer = { ...curPlayer, avatar };
    const result = editPlayer(editedPlayer);
    if (!result.ok) setError("This name already exists.");
    else onCloseEdit();
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      {/* Karta z przewijaniem na mobile */}
      <div className="relative w-[92vw] max-w-[520px] max-h-[90dvh] overflow-y-auto border-2 bg-sky-950 rounded-2xl p-3 sm:p-6 text-left">
        <form onSubmit={handleSubmit}>
          <div className="py-2 sm:py-4 mx-1 sm:mx-2">
            {/* =============== Name =============== */}
            <div className="flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">🙍🏼‍♂️ Name :</label>
              <input
                type="text"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" name..."
                name="name"
                value={curPlayer.name}
                onChange={handleEdit}
              />
            </div>

            {/* =============== Avatar select =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35" htmlFor="avatar">
                Avatar :
              </label>
              <select
                id="avatar"
                value={selectedOption}
                onChange={(e) => handleSelectedOption(e.target.value)}
                className="bg-white text-black w-full xs:min-w-50 xs:max-w-38"
              >
                <option value="current">Current avatar</option>
                <option value="default">Default avatar</option>
                <option value="pick">Pick avatar</option>
                <option value="urlAddress">Add URL address</option>
              </select>
            </div>

            {/* =============== IMG SELECTION =============== */}
            {selectedOption === "pick" && (
              <div className="mt-3 flex justify-center">
                <div className="grid grid-cols-3 xs:grid-cols-6 gap-3 xs:gap-2 w-full max-w-max sm:max-w-[420px]">
                  {avatarsArr.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedAvatar(idx)}
                      className={`${
                        selectedAvatar === idx
                          ? "border-3 border-sky-400"
                          : "border-1 border-slate-400"
                      } bg-white size-15 rounded-sm overflow-hidden justify-self-center`}
                      aria-label={`Choose avatar ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`avatar${idx + 1}`}
                        className="object-cover object-top w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* =============== URL INPUT FIELD =============== */}
            {selectedOption === "urlAddress" && (
              <div className="mt-3 flex flex-col xs:flex-row xs:gap-3 justify-start">
                <label htmlFor="imageURL" className="xs:text-right w-35">
                  Image URL :
                </label>
                <input
                  id="imageURL"
                  type="text"
                  placeholder=" https://..."
                  className="bg-amber-50 w-full text-black px-1.5"
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  value={avatarUrl}
                />
              </div>
            )}

            {/* =============== Weight =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">⚖ Weight :</label>
              <input
                type="text"
                inputMode="numeric"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" kg"
                value={curPlayer.weight ?? ""}
                name="weight"
                onChange={handleEdit}
              />
            </div>

            {/* =============== Height =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">📏 Height :</label>
              <input
                type="text"
                inputMode="numeric"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" cm"
                value={curPlayer.height ?? ""}
                name="height"
                onChange={handleEdit}
              />
            </div>

            {/* =============== Age =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">⏳ Age :</label>
              <input
                type="text"
                inputMode="numeric"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" years old"
                value={curPlayer.age ?? ""}
                name="age"
                onChange={handleEdit}
              />
            </div>

            {/* =============== Experience =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">⚔ Experience :</label>
              <input
                type="text"
                inputMode="numeric"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" matches played"
                value={curPlayer.exp ?? ""}
                name="exp"
                onChange={handleEdit}
              />
            </div>

            {/* =============== Main Position =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">📌 Main Position :</label>
              <input
                type="text"
                className="bg-sky-50 w-full xs:max-w-50 text-black pl-1"
                placeholder=" eg. 15"
                value={curPlayer.pos ?? ""}
                name="pos"
                onChange={handleEdit}
              />
            </div>

            {/* =============== Alt. Position =============== */}
            <div className="mt-2 flex flex-col xs:flex-row xs:gap-3 justify-start">
              <label className="xs:text-right w-35">🔄 Alter. Position :</label>
              <input
                type="text"
                className="bg-sky-50 w-full xs:w-50 text-black pl-1"
                placeholder=" eg. 14, 11..."
                value={curPlayer.altPos ?? ""}
                name="altPos"
                onChange={handleEdit}
              />
            </div>
          </div>

          {/* Przyciski */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-4">
            <Button type="submit" className="flex justify-center w-22">
              <span className="ininline-block mr-1">Save</span>{" "}
              <img
                src={saveIcon}
                alt="Save icon"
                className="inline-block h-6"
              />
            </Button>
            <Button onClick={onCloseEdit} className="flex justify-center w-22">
              <span className="ininline-block mr-1">Back</span>{" "}
              <img
                src={backIcon}
                alt="Back arrow icon"
                className="inline-block h-5"
              />
            </Button>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default EditPlayer;
