import { useState } from "react";
import Button from "./button-components/Button";
import EditPlayer from "./EditPlayer";
import { usePlayers } from "../hooks/usePlayers";

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
        <div className="relative border-2 text-left size-max bg-sky-950 px-2 xxs:px-4 md:px-8 pt-8 pb-7 rounded-2xl">
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

          <div className="xs:flex justify-between">
            <div className="xs:min-w-45">
              <span>⚖ Weight:</span>{" "}
              <span>{updatedPlayer.weight ? updatedPlayer.weight : "--"}</span>
            </div>

            <div className="xs:min-w-45">
              <span>📏 Height:</span>{" "}
              <span>{updatedPlayer.height ? updatedPlayer.height : "--"}</span>
            </div>
          </div>

          <div className="xs:flex justify-between">
            <div className="xs:min-w-45">
              <span>⌛ Age:</span>{" "}
              <span>{updatedPlayer.age ? updatedPlayer.age : "--"}</span>
            </div>

            <div className="xs:min-w-45">
              <span>⚔ Expirience:</span>{" "}
              <span>{updatedPlayer.exp ? updatedPlayer.exp : "--"}</span>
            </div>
          </div>

          <div className="xs:flex justify-between">
            <div className="xs:min-w-45">
              <span>📌 Position:</span>{" "}
              <span>{updatedPlayer.pos ? updatedPlayer.pos : "--"}</span>
            </div>

            <div className="xs:min-w-45">
              <span>💱 Alt. pos.:</span>{" "}
              <span>{updatedPlayer.altPos ? updatedPlayer.altPos : "--"}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 xs:gap-10 pt-5">
            <Button
              onClick={() => {
                handleOpenEdit(updatedPlayer);
              }}
            >
              Edit 🛠
            </Button>
            <Button
              onClick={() => {
                onCloseViewDetails();
              }}
            >
              Ok ↩
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerDetails;
