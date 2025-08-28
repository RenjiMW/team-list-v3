import { useEffect, useState } from "react";
import { usePlayers } from "../hooks/usePlayers";
import Button from "./button-components/Button";

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
    if (value !== "default") {
      setSelectedAvatar(false);
    }
  }

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCurPlayer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedPlayer = {
      ...curPlayer,
      avatar: avatar,
    };

    const result = editPlayer(editedPlayer);

    if (!result.ok) {
      setError("This name already exists.");
    } else if (result.ok) {
      onCloseEdit();
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center h-screen w-full bg-black/50">
      <div className="relative border-2 text-left size-max  bg-sky-950 px-8 pt-8 pb-7 rounded-2xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="py-4 mx-4">
            {/* ================== Name ================== */}
            <div className="flex gap-3 justify-start">
              <label className="text-right w-35">🙍🏼‍♂️ Name :</label>
              <input
                type="text"
                className="bg-sky-50 w-50 text-black pl-1"
                placeholder=" name..."
                name="name"
                value={curPlayer.name}
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================= DROPDOWN MENU ================= */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35" htmlFor="avatar">
                Avatar :
              </label>
              <select
                id="avatar"
                value={selectedOption}
                onChange={(e) => handleSelectedOption(e.target.value)}
                className="bg-white text-black min-w-50"
              >
                <option value="current">Current avatar</option>
                <option value="default">Default avatar</option>
                <option value="pick">Pick avatar</option>
                <option value="urlAddress">Add URL address</option>
              </select>
            </div>

            {/* ================= IMG SELECTION ================= */}
            <div className="w-100 flex justify-center">
              {selectedOption === "pick" && (
                <div className="flex flex-wrap justify-center gap-2 w-50 min-h-min mt-3 pb-1">
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

            {/* ================== Weight ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">⚖ Weight :</label>
              <input
                type="text"
                className="bg-sky-50 w-20 text-black pl-1"
                placeholder=" kg"
                value={curPlayer.weight ? curPlayer.weight : ""}
                name="weight"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================== Height ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">📏 Height :</label>
              <input
                type="text"
                className="bg-sky-50 w-20 text-black pl-1"
                placeholder=" cm"
                value={curPlayer.height ? curPlayer.height : ""}
                name="height"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================== Age ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">⌛ Age :</label>
              <input
                type="text"
                className="bg-sky-50 w-20 text-black pl-1"
                placeholder=" years old"
                value={curPlayer.age ? curPlayer.age : ""}
                name="age"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================== Expirience ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">⚔ Expirience :</label>
              <input
                type="text"
                className="bg-sky-50 w-20 text-black pl-1"
                placeholder=" matches qty."
                value={curPlayer.exp ? curPlayer.exp : ""}
                name="exp"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================== Main Position ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">📌 Main Position :</label>
              <input
                type="text"
                className="bg-sky-50 w-20 text-black pl-1"
                placeholder=" eg. 15"
                value={curPlayer.pos ? curPlayer.pos : ""}
                name="pos"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>

            {/* ================== Alter. Position ================== */}
            <div className="mt-2 flex gap-3 justify-start">
              <label className="text-right w-35">🔄 Alter. Position :</label>
              <input
                type="text"
                className="bg-sky-50 w-50 text-black pl-1"
                placeholder=" eg. 14, 11..."
                value={curPlayer.altPos ? curPlayer.altPos : ""}
                name="altPos"
                onChange={(e) => {
                  handleEdit(e);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center gap-10 mt-4">
            <Button type="submit">Save 💾</Button>
            <Button
              onClick={() => {
                onCloseEdit();
              }}
            >
              Back ↩
            </Button>
          </div>
          {/* ================== ERROR MESSAGE ================== */}
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default EditPlayer;
