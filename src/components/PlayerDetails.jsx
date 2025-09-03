import { useState } from "react";
import Button from "./button-components/Button";
import EditPlayer from "./EditPlayer";
import { usePlayers } from "../hooks/usePlayers";
import backIcon from "../assets/imgs/back.svg";
import options from "../assets/imgs/options.png";

function PlayerDetails({ player, onCloseViewDetails }) {
  const { availablePlayers } = usePlayers();

  const updatedPlayerIndex = availablePlayers.findIndex(
    (playerAvail) => playerAvail.id === player.id
  );

  const updatedPlayer = availablePlayers[updatedPlayerIndex];

  const [edit, setEdit] = useState({ open: false, player: null });
  const handleOpenEdit = (player) => setEdit({ open: true, player });
  const handelCloseEdit = () => setEdit({ open: false, player: null });

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center h-screen w-full bg-black/50">
      {edit.open && (
        <EditPlayer player={updatedPlayer} onCloseEdit={handelCloseEdit} />
      )}
      {!edit.open && (
        <div className="relative border-2 text-left size-max bg-sky-950 px-2 xxs:px-4 md:px-8 pt-8 pb-7 rounded-2xl m-4">
          <div className="flex justify-center mb-3 ">
            <div className="border-2 rounded-lg size-20">
              <img
                src={updatedPlayer.avatar}
                alt="Player avatar"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="xs:min-w-40 ml-2 xs:ml-5 flex items-center justify-center">
              <span className="font-bold text-2xl">{updatedPlayer.name}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="xs:flex justify-between">
              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">⚖</span>{" "}
                  Weight:{" "}
                  <span>
                    {updatedPlayer.weight ? updatedPlayer.weight : "--"}
                  </span>
                </p>
              </div>

              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">📏</span>{" "}
                  Height:{" "}
                  <span>
                    {updatedPlayer.height ? updatedPlayer.height : "--"}
                  </span>
                </p>
              </div>
            </div>

            <div className="xs:flex justify-between">
              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">⌛</span> Age:{" "}
                  <span>{updatedPlayer.age ? updatedPlayer.age : "--"}</span>
                </p>
              </div>

              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">⚔</span>{" "}
                  Expirience:{" "}
                  <span>{updatedPlayer.exp ? updatedPlayer.exp : "--"}</span>
                </p>
              </div>
            </div>

            <div className="xs:flex justify-between">
              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">📌</span>{" "}
                  Position:{" "}
                  <span>{updatedPlayer.pos ? updatedPlayer.pos : "--"}</span>
                </p>
              </div>

              <div className="min-w-40 xs:min-w-45">
                <p>
                  <span className="inline-block w-6 text-center">💱</span> Alt.
                  pos.{" "}
                  <span>
                    {updatedPlayer.altPos ? updatedPlayer.altPos : "--"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 xs:gap-10 pt-5">
            <Button
              onClick={() => {
                handleOpenEdit(updatedPlayer);
              }}
              className="flex justify-center"
            >
              <span className="ininline-block mr-1">Edit</span>{" "}
              <img
                src={options}
                alt="Slider symbol - for editing the player"
                className="inline-block"
              />
            </Button>
            <Button
              onClick={() => {
                onCloseViewDetails();
              }}
              className="flex justify-center"
            >
              <span className="ininline-block mr-1">Back</span>{" "}
              <img
                src={backIcon}
                alt="Back arrow icon"
                className="inline-block h-5"
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerDetails;
