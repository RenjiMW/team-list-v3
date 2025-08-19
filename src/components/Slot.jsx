import { Draggable, Droppable } from "@hello-pangea/dnd";
import { usePlayers } from "../hooks/usePlayers";
import SmallButton from "./button-components/SmallButton";

function Slot({ slot }) {
  const { unassignFromSquad, availablePlayers } = usePlayers();
  const occupantId = slot.occupantId;

  const player = availablePlayers.find((player) => player.id === occupantId);

  // if (occupantId) {
  //   console.log("occupantId", occupantId);
  //   console.log("playerInAvailList", player);
  // }

  const baseStyles =
    "flex justify-between items-center w-full h-11 border-2 rounded-lg  p-3";

  return (
    <>
      <Droppable droppableId={slot.slotId} type="player">
        {(provided, snapshot) => {
          const hideContent = snapshot.isDraggingOver && !occupantId;

          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`${baseStyles} ${
                snapshot.isDraggingOver ? "bg-red-300" : "bg-slate-600"
              } transition-colors`}
            >
              {!hideContent &&
                (occupantId ? (
                  <Draggable
                    draggableId={occupantId}
                    index={0}
                    key={occupantId}
                  >
                    {(provided) => (
                      <div
                        className="flex justify-around items-center border rounded-2xl bg-sky-700 text-left w-full p-1"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <span className="block w-8 text-center font-bold">
                          {slot.slotId.slice(5)}
                        </span>
                        <img className="size-8" src={player.avatar} alt="" />
                        <span className="w-20">{player.name}</span>
                        <SmallButton
                          onClick={() => unassignFromSquad(slot.slotId)}
                        >
                          ❌
                        </SmallButton>
                      </div>
                    )}
                  </Draggable>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    <span className="block">{slot.slotId.slice(5)}</span>
                    <span className="block">{slot.positionName}</span>
                  </div>
                ))}

              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
}

export default Slot;

function OccupiedSlot({ id, avatar, name }) {
  const { unassignFromSquad } = usePlayers();
  return (
    <>
      <div className="flex justify-between items-center w-80 h-16 border-2 rounded-lg bg-indigo-600 p-3">
        <span>{id}</span>
        <div className="w-10 h-10 bg-stone-400 text-black font-bold flex items-center justify-center">
          <img src={avatar} />
        </div>

        <h1>{name}</h1>
        <div className="flex gap-1">
          <SmallButton onClick={() => unassignFromSquad(id)}>❌</SmallButton>
        </div>
      </div>
    </>
  );
}

/*
return (
    <>
      {player ? (
        <OccupiedSlot
          id={slot.slotId}
          avatar={player.avatar}
          name={player.name}
        />
      ) : (
        <Droppable droppableId={`slot-${slot.slotId}`}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex justify-between items-center w-80 h-11 border-2 rounded-lg bg-slate-600 p-3"
            >
              <>
                <span>{slot.slotId}</span>
                <span>{slot.positionName}</span>
              </>
            </div>
          )}
        </Droppable>
      )}
    </>
  );
*/
