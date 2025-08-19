import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { usePlayers } from "../../hooks/usePlayers";
import Button from "../button-components/Button";
import ReadyPlayer from "../ReadyPlayer";
import Approval from "../Approval";
import { useState } from "react";

function AvailablePlayers({ addPlayer }) {
  const { availablePlayers, deletePlayer } = usePlayers();
  const visibleAvailable = availablePlayers.filter((p) => !p.inSquad);

  console.log(`availablePlayers=`, availablePlayers);
  console.log(`visibleAvailable=`, visibleAvailable);

  // ================================
  // Delting confirmation logic
  const [confirm, setConfirm] = useState({ open: false, player: null });

  const onAskDelete = (player) => setConfirm({ open: true, player });
  const onCancel = () => setConfirm({ open: false, player: null });
  const onConfirm = () => {
    deletePlayer(confirm.player);
    onCancel();
  };

  const visiblePlayersQty = visibleAvailable.length;

  return (
    <div className="w-md h-full text-center border-2 rounded-lg p-5">
      <h1 className="font-bold text-2xl">
        Available players{" "}
        <span className="text-amber-200">[{visiblePlayersQty}]</span>
      </h1>

      <div className="flex justify-center gap-5 my-4">
        <Button onClick={addPlayer}>Add new player</Button>
        <Button>Hide list</Button>
      </div>

      {confirm.open && (
        <Approval
          playerName={confirm.player.name}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}

      <Droppable droppableId="available-list" type="player">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {visibleAvailable.map((player, index) => (
              <Draggable key={player.id} draggableId={player.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={[
                      "selct-none",
                      "cursor-grab",
                      snapshot.isDragging
                        ? "opacity-80 ring-2 ring-blue-500"
                        : "",
                    ].join(" ")}
                  >
                    <ReadyPlayer
                      player={player}
                      index={index}
                      onAskDelete={onAskDelete}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {/* =========== DECENDENTS generation =========== */}
          </ul>
        )}
      </Droppable>
    </div>
  );
}

export default AvailablePlayers;
