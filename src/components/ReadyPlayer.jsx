import { usePlayers } from "../hooks/usePlayers";
import { useEffect, useState } from "react";
import SmallButton from "./button-components/SmallButton";
import { useWindowWidth } from "../hooks/useWindowWidth";

function ReadyPlayer({ player, onAskDelete, onViewDetails }) {
  const { assignToSquad } = usePlayers();
  const { name, avatar } = player;
  const [showStats, setShowStats] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  const notMobile = width >= 480;

  useEffect(() => {
    if (notMobile && isOpen) {
      setIsOpen(false);
    }
  }, [notMobile, isOpen]);

  const formatName = (name) => {
    if (name.length > 10 && name.includes(" ")) {
      const nameLenght = name.length;
      const spaceIndex = name.indexOf(" ");
      const firstPart = name.slice(0, spaceIndex);
      const cutEnd = name.slice(spaceIndex + 1, nameLenght);
      const letter = cutEnd.slice(0, 1);

      return `${firstPart} ${letter}.`;
    }
    return name.length > 10 ? name.slice(0, 10) + "..." : name;
  };

  return (
    <div className="flex flex-col border-2 rounded-lg bg-s2 ">
      <div className="relative flex justify-between items-center xxs:w-[236px] xs:w-80 min-h-14  px-2 ">
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
          >
            ⚙
          </SmallButton>
          <SmallButton
            onClick={() => {
              setShowStats((prev) => !prev);
            }}
          >
            🔍
          </SmallButton>
          <SmallButton player={player} onClick={() => onAskDelete(player)}>
            ❌
          </SmallButton>
          <SmallButton onClick={() => assignToSquad(player.id, null)}>
            ▶
          </SmallButton>
        </div>

        <div className="xs:hidden">
          <SmallButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "↩" : "➕"}
          </SmallButton>
        </div>

        {isOpen && (
          <div className="xs:hidden absolute  right-11 grid grid-cols-2 gap-0.5">
            <SmallButton
              onClick={() => {
                onViewDetails(player), setIsOpen(false);
              }}
            >
              ⚙
            </SmallButton>
            <SmallButton
              onClick={() => {
                setShowStats((prev) => !prev), setIsOpen(false);
              }}
            >
              🔍
            </SmallButton>
            <SmallButton
              player={player}
              onClick={() => {
                onAskDelete(player), setIsOpen(false);
              }}
            >
              ❌
            </SmallButton>
            <SmallButton
              onClick={() => {
                assignToSquad(player.id, null), setIsOpen(false);
              }}
            >
              ▶
            </SmallButton>
          </div>
        )}
      </div>
      {showStats && (
        <div className="min-h-8 grid grid-cols-4 xs:flex justify-around">
          <div className="col-span-2 mr-3">
            <span>⚖</span>
            <span>{player.weight ? player.weight : " -- "}</span>
            <span className="text-xs">kg</span>
          </div>
          <div className="col-span-2 mr-2">
            <span>📏</span>
            <span>{player.height ? player.height : " -- "}</span>
            <span className="text-xs">cm</span>
          </div>
          <div className="col-span-2 mr-2">
            <span>⌛</span>
            <span>{player.age ? player.age : " -- "}</span>
            <span className="text-xs">yo</span>
          </div>
          <div className="col-span-2 mr-2">
            <span>⚔</span>
            <span>{player.exp ? player.exp : " -- "}</span>
            <span className="text-xs">mt.</span>
          </div>
          <div className="col-span-4 mr-1">
            <span>📌</span>
            <span>{player.pos ? player.pos : " -- "}</span>
            <span className="text-xs"> #</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadyPlayer;
