import { usePlayers } from "../hooks/usePlayers";
import SmallButton from "./button-components/SmallButton";

function ReadyPlayer({ player, onAskDelete, index }) {
  const { assignToSquad } = usePlayers();
  const { name, avatar } = player;

  return (
    <div className="flex justify-between items-center w-80 h-16 border-2 rounded-lg bg-indigo-600 p-3">
      <div className="w-10 h-10 bg-stone-400 text-black font-bold flex items-center justify-center">
        <img src={avatar} />
      </div>

      <h1 className="w-20">{name}</h1>
      <p className="mr-2">
        #<span className="font-bold text-xl">{index}</span>
      </p>
      <div className="flex gap-1">
        <SmallButton>⚙</SmallButton>
        <SmallButton player={player} onClick={() => onAskDelete(player)}>
          ❌
        </SmallButton>
        <SmallButton onClick={() => assignToSquad(player.id, null)}>
          ▶
        </SmallButton>
      </div>
    </div>
  );
}

export default ReadyPlayer;
