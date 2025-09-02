import { Draggable, Droppable } from "@hello-pangea/dnd";
import { usePlayers } from "../../hooks/usePlayers";
import Button from "../button-components/Button";
import ReadyPlayer from "../ReadyPlayer";
import Approval from "../Approval";
import { useState } from "react";
import PlayerDetails from "../PlayerDetails";

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

  const [viewDetails, setViewDetails] = useState({ open: false, player: null });
  const handleViewDetails = (player) => setViewDetails({ open: true, player });
  const handleCloseViewDetails = () =>
    setViewDetails({ open: false, player: null });

  const visiblePlayersQty = visibleAvailable.length;

  function getDraggingStyle(style, snapshot) {
    if (!snapshot.isDragging) return style;
    const base = style?.transform ?? "";
    return {
      ...style,
      transform: `${base} scale(0.7)`,
      transformOrigin: "center",
    };
  }

  //xxs:w-[284px]

  return (
    <div className="w-full max-w-md md:min-h-[748px] text-center border-2 rounded-lg p-5 m-3 lg:m-0">
      <h1 className="font-bold text-2xl">
        Available players{" "}
        <span className="text-amber-200">[{visiblePlayersQty}]</span>
      </h1>

      <div className="flex justify-center my-4">
        <Button onClick={addPlayer}>Add new player</Button>
      </div>
      {viewDetails.open && (
        <PlayerDetails
          player={viewDetails.player}
          onCloseViewDetails={handleCloseViewDetails}
        />
      )}

      {confirm.open && (
        <Approval
          playerName={confirm.player.name}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      )}

      <Droppable droppableId="available-list" type="player">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col xs:min-w-[324px] gap-0.5 items-center min-h-30 lg:h-full overflow-y-auto py-2"
          >
            {visibleAvailable.map((player, index) => (
              <Draggable key={player.id} draggableId={player.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getDraggingStyle(
                      provided.draggableProps.style,
                      snapshot
                    )}
                    className={[
                      "select-none",
                      "cursor-grab",
                      "w-full",
                      "flex",
                      "justify-center",
                      snapshot.isDragging
                        ? "opacity-80 ring-2 ring-blue-500 rounded-lg max-w-fit"
                        : "",
                    ].join(" ")}
                  >
                    <ReadyPlayer
                      player={player}
                      index={index}
                      onAskDelete={onAskDelete}
                      onViewDetails={handleViewDetails}
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
