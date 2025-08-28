import Button from "../button-components/Button";
import Slot from "../Slot";
import { usePlayers } from "../../hooks/usePlayers";
import { Droppable, Draggable } from "@hello-pangea/dnd";

function SquadList() {
  const { squadPlayers } = usePlayers();

  const currentSquadSize = squadPlayers.filter(
    (player) => player.occupantId
  ).length;

  ///////////////////////////////////////
  // Players grouping
  const firstRow = squadPlayers.filter((player, index) => index < 3);
  const secondRow = squadPlayers.filter(
    (player, index) => index >= 3 && index <= 4
  );
  const thirdRow = squadPlayers.filter(
    (player, index) => index > 4 && index < 8
  );
  const number9and10 = squadPlayers.filter(
    (player, index) => index === 8 || index === 9
  );
  const centers = squadPlayers.filter(
    (player, index) => index >= 11 && index <= 12
  );
  const wingers = squadPlayers.filter(
    (player, index) => index === 10 || index === 13 || index === 14
  );

  const replacements = squadPlayers.filter(
    (player, index) => index >= 15 && index <= 22
  );

  /////////////////////////////////////////
  /// JSX return
  return (
    <div className="w-2xl h-full text-center border-2 rounded-lg p-5">
      <h1 className="font-bold text-2xl">
        Squad List <span className="text-amber-200">[{currentSquadSize}]</span>
      </h1>

      <div className="my-16 "></div>

      <ul className="flex justify-around gap-5">
        <div className="w-1/2">
          <div className="mb-4">
            {firstRow.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>

          <div className="mb-4">
            {secondRow.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>

          <div className="mb-4">
            {thirdRow.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>

          <div className="mb-4">
            {number9and10.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>

          <div className="mb-4">
            {centers.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-14">
            {wingers.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>

          <div className="mb-4">
            {replacements.map((slot, index) => (
              <Slot slot={slot} key={slot.slotId} index={index} />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SquadList;
