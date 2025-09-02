import { usePlayers } from "../hooks/usePlayers";

function FieldList({ handleMouseEnter, handleMouseLeave, highlightPlayer }) {
  const { squadPlayers } = usePlayers();

  // const initialSquad = squadPlayers.filter((player, index) => index < 15);
  const initialSquadUntil8 = squadPlayers.filter((player, index) => index < 8);
  const initialSquadFrom9 = squadPlayers.filter(
    (player, index) => index > 7 && index < 15
  );
  const replacements = squadPlayers.filter((player, index) => index >= 15);

  return (
    <>
      <div className="min-w-50 flex flex-col sm:mt-8 mb-8 lg:items-baseline ">
        <div className="w-full p-5 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
          <h3 className="font-bold text-lg">Initaial squad</h3>
          <ul className="flex sm:flex-col gap-10 sm:gap-0">
            <div>
              {initialSquadUntil8.map((squadPlayer, index) => (
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
            <div>
              {initialSquadFrom9.map((squadPlayer, index) => (
                <FieldListItem
                  id={squadPlayer.occupantId}
                  key={index}
                  number={index + 9}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  highlightPlayer={highlightPlayer}
                />
              ))}
            </div>
          </ul>
        </div>
        <div className="mt-2 w-full p-5 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
          <h3 className="font-bold text-lg">Replacements</h3>
          <ul className="grid grid-cols-2 sm:flex sm:flex-col">
            {replacements.map((squadPlayer, index) => (
              <FieldListItem
                id={squadPlayer.occupantId}
                key={index}
                number={squadPlayer.slotId.slice(5)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
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
