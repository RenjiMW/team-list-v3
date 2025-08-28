import { usePlayers } from "../hooks/usePlayers";

function FieldList({ handleMouseEnter, handleMouseLeave, highlightPlayer }) {
  const { squadPlayers } = usePlayers();

  const initialSquad = squadPlayers.filter((player, index) => index < 15);
  const replacements = squadPlayers.filter((player, index) => index >= 15);

  return (
    <div>
      <ul className="flex lg:flex-row flex-col mt-8 lg:mt-4 lg:items-baseline">
        <div className="min-w-50">
          <h3 className="font-bold text-lg">Initaial squad</h3>
          {initialSquad.map((squadPlayer, index) => (
            <FieldListItem
              id={squadPlayer.occupantId}
              key={index}
              number={index + 1}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              highlightPlayer={highlightPlayer}
            />
          ))}
        </div>
        <div className="mt-5 min-w-50">
          <h3 className="font-bold text-lg">Replacements</h3>
          {replacements.map((squadPlayer, index) => (
            <FieldListItem
              id={squadPlayer.occupantId}
              key={index}
              number={squadPlayer.slotId.slice(5)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default FieldList;

function FieldListItem({
  id,
  number,
  handleMouseEnter,
  handleMouseLeave,
  highlightPlayer,
}) {
  const { availablePlayers } = usePlayers();

  const styleHover = number <= 15 ? "hover:text-sky-400 hover:font-bold" : "";
  const circleHover =
    highlightPlayer === number ? "text-sky-400 font-bold" : "";

  let player = {
    name: "❓",
    id: "1",
    avatar: "none",
  };

  if (id) {
    player = availablePlayers.find((player) => player.id === id);
  }

  return (
    <li
      onMouseEnter={() => {
        if (number < 16) {
          handleMouseEnter(number);
        }
      }}
      onMouseLeave={() => {
        if (number < 16) {
          handleMouseLeave();
        }
      }}
      className={`flex text-right ${styleHover} ${circleHover}`}
    >
      <span className="block w-5 mr-3">{number}</span>
      <span className="block">{player.name}</span>
    </li>
  );
}
