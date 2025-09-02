import { Draggable, Droppable } from "@hello-pangea/dnd";
import { usePlayers } from "../hooks/usePlayers";
import SmallButton from "./button-components/SmallButton";

function Slot({ slot }) {
  const { unassignFromSquad, availablePlayers } = usePlayers();
  const occupantId = slot.occupantId;

  const player = availablePlayers.find((player) => player.id === occupantId);

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

  const baseStyles =
    "flex justify-between items-center w-47.5 xxs:w-60 xs:w-80 lg:w-70 xl:w-80 h-11 border-2 rounded-lg";

  return (
    <>
      <Droppable droppableId={slot.slotId} type="player">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`${baseStyles} ${
                snapshot.isDraggingOver
                  ? "bg-s25 shadow-[0_0_20px_10px_rgba(251,224,118,0.8)]"
                  : "bg-slate-600"
              } transition-colors`}
            >
              {/* {!hideContent && */}
              {occupantId ? (
                <Draggable draggableId={occupantId} index={0} key={occupantId}>
                  {(provided) => (
                    <div
                      className="flex justify-between items-center border rounded-lg bg-s2 text-left w-full p-1"
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <div className="flex justify-start items-center w-full">
                        {/*number*/}
                        <span className="block xxs:ml-2 xs:ml-3.5 w-8 text-center font-bold">
                          {slot.slotId.slice(5)}
                        </span>

                        {/*avatar*/}
                        <div className="size-8 xxs:ml-2 xs:ml-3  bg-stone-300 ">
                          <img
                            className="object-cover object-top w-full h-full"
                            src={player.avatar}
                            alt=""
                          />
                        </div>

                        {/*imie*/}
                        <span className="w-15 xs:w-25 xxs:ml-2 xs:ml-3 overflow-hidden">
                          {formatName(player.name)}
                        </span>
                      </div>

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
                  <span className="block w-8 ml-4.5">
                    {slot.slotId.slice(5)}
                  </span>
                  <span className="block mr-5">{slot.positionName}</span>
                </div>
              )}
            </div>
          );
        }}
      </Droppable>
    </>
  );
}

export default Slot;
