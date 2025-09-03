import { usePlayers } from "../hooks/usePlayers";
import { useEffect, useState } from "react";
import SmallButton from "./button-components/SmallButton";
import { useWindowWidth } from "../hooks/useWindowWidth";
import playerMenu from "../assets/imgs/tabler_dots.png";
import backIcon from "../assets/imgs/back-icon.png";
import plus from "../assets/imgs/plus.svg";
import options from "../assets/imgs/options.png";
import deleteIcon from "../assets/imgs/delete.svg";
import magnifier from "../assets/imgs/magnifier.svg";

import ModalError from "./ModalError";

function ReadyPlayer({ player, onAskDelete, onViewDetails }) {
  const { assignToSquad } = usePlayers();
  const { name, avatar } = player;
  const [showStats, setShowStats] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  const notMobile = width >= 480;

  useEffect(() => {
    if (notMobile && isOpen) {
      setIsOpen(false);
    }
  }, [notMobile, isOpen]);

  const formatName = (name) => {
    const nameLenght = name.length;
    const spaceIndex = name.indexOf(" ");
    const firstPart = name.slice(0, spaceIndex);

    if (firstPart.length > 10 && spaceIndex !== -1) {
      const onlyPart = firstPart.slice(0, 10) + "...";
      return `${onlyPart}`;
    } else if (nameLenght > 10 && name.includes(" ")) {
      const cutEnd = name.slice(spaceIndex + 1, nameLenght);
      const letter = cutEnd.slice(0, 1);
      return `${firstPart} ${letter}.`;
    } else {
      return nameLenght > 10 ? name.slice(0, 10) + "..." : name;
    }
  };

  function handleAssignToSquad() {
    setIsOpen(false);
    const result = assignToSquad(player.id, null);

    if (!result.ok) {
      console.log("To many players in squad");
      setError("To many players in squad list.");
    } else if (result.ok) {
      setError("");
    }
  }

  return (
    <div className="flex flex-col border-2 rounded-lg bg-s2 w-full xxs:w-full xs:w-80">
      <div className="relative flex justify-between items-center min-h-14 px-2 ">
        <div className="w-10 h-10 bg-stone-300 text-black font-bold flex items-center justify-center overflow-hidden">
          <img
            src={avatar}
            className="object-cover object-top w-full h-full"
            alt="avatar"
          />
        </div>

        <h1 className="w-25">{formatName(name)}</h1>

        <div className="hidden xs:flex gap-1">
          <SmallButton
            onClick={() => {
              onViewDetails(player);
            }}
            className="w-9 h-8 flex justify-center"
          >
            <img src={options} alt="Slider symbol - for editing the player" />
          </SmallButton>
          <SmallButton
            onClick={() => {
              setShowStats((prev) => !prev);
            }}
            className="w-9 h-8 flex justify-center"
          >
            <img src={magnifier} alt="Magnifier symbol - to view details" />
          </SmallButton>
          <SmallButton
            player={player}
            onClick={() => onAskDelete(player)}
            className="w-9 h-8 flex justify-center"
          >
            <img
              src={deleteIcon}
              alt="Delete icon - for deleting player from app"
            />
          </SmallButton>
          <SmallButton
            onClick={handleAssignToSquad}
            className="w-9 h-8 flex justify-center"
          >
            <img
              src={plus}
              alt="Plus icon - for assaigning player to squad list"
            />
          </SmallButton>
        </div>

        <div className="xs:hidden">
          <SmallButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <img src={backIcon} /> : <img src={playerMenu} />}
          </SmallButton>
        </div>

        {isOpen && (
          <div className="xs:hidden absolute  right-11 grid grid-cols-2 gap-0.5">
            <SmallButton
              onClick={() => {
                onViewDetails(player), setIsOpen(false);
              }}
              className="w-9 h-8 flex justify-center"
            >
              <img src={options} alt="Slider symbol - for editing the player" />
            </SmallButton>
            <SmallButton
              onClick={() => {
                setShowStats((prev) => !prev), setIsOpen(false);
              }}
              className="w-9 h-8 flex justify-center"
            >
              <img src={magnifier} alt="Magnifier symbol - to view details" />
            </SmallButton>
            <SmallButton
              player={player}
              onClick={() => {
                onAskDelete(player), setIsOpen(false);
              }}
              className="w-9 h-8 flex justify-center"
            >
              <img
                src={deleteIcon}
                alt="Delete icon - for deleting player from app"
                className="w-full"
              />
            </SmallButton>
            <SmallButton
              onClick={handleAssignToSquad}
              className="w-9 h-8 flex justify-center"
            >
              <img
                src={plus}
                alt="Plus icon - for assaigning player to squad list"
              />
            </SmallButton>
          </div>
        )}
      </div>
      {showStats && (
        <div className="min-h-8 grid grid-cols-4 gap-1 xs:flex xs:gap-2 justify-around">
          <div className="col-span-2">
            <span className="inline-block w-8">⚖</span>
            <div className="w-12 inline xs:block">
              <span>{player.weight ? player.weight : " -- "}</span>
              <span className="text-xs">kg</span>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block w-8">📏</span>
            <div className="w-12 inline xs:block">
              <span>{player.height ? player.height : " -- "}</span>
              <span className="text-xs">cm</span>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block w-8">⌛</span>
            <div className="w-12 inline xs:block">
              <span>{player.age ? player.age : " -- "}</span>
              <span className="text-xs">yo</span>
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block w-8">⚔</span>
            <div className="w-12 inline xs:block">
              <span>{player.exp ? player.exp : " -- "}</span>
              <span className="text-xs">MP</span>
            </div>
          </div>
          <div className="col-span-4">
            <span className="inline-block w-8">📌</span>
            <div className="w-12 inline xs:block">
              <span>{player.pos ? player.pos : " -- "}</span>
              <span className="text-xs"> #</span>
            </div>
          </div>
        </div>
      )}

      {error && <ModalError error={error} setError={setError} />}
    </div>
  );
}

export default ReadyPlayer;
