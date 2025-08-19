const availablePlayers = [
  {
    avatar: "https://robohash.org/gold.png",
    id: "cee3910d-55ac-4bbd-8b66-2e28256ceab0",
    inSquad: false,
    name: "Gold",
  },
  {
    avatar: "https://robohash.org/yellow.png",
    id: "36b7e9a6-efcf-425e-88d4-1d70fc2a8b9c",
    inSquad: true,
    name: "Yellow",
  },
  {
    avatar: "https://robohash.org/purple.png",
    id: "166194e4-5d93-44dd-8cb3-60856e8b7293",
    inSquad: false,
    name: "Purple",
  },
];

const squadPlayers = [
  {
    occupantId: null,
    positionName: "Loosehead Prop",
    slotId: 1,
  },
  {
    occupantId: "36b7e9a6-efcf-425e-88d4-1d70fc2a8b9c",
    positionName: "Hooker",
    slotId: 2,
  },

  {
    occupantId: null,
    positionName: "Tighthead Prop",
    slotId: 3,
  },
];

console.log(availablePlayers, squadPlayers);

const sIndex = state.squadPlayers.findIndex((s) => s.occupantId == null);

function note() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3"> 
        {squadPlayers.map((slot) => {
          const player = slot.occupantId ? playersById[slot.occupantId] : null;

          // KAŻDY SLOT TO ODDZIELNY DROPPABLE
          return (
            <Droppable
              key={slot.slotId}
              droppableId={`slot:${slot.slotId}`}
              type="squad-slot"
              // isDropDisabled={...} // jeśli chcesz ograniczenia pozycji
            >


              {(dropProvided, dropSnapshot) => (
                <li
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                  className={`rounded border p-2 min-h-16 ${
                    dropSnapshot.isDraggingOver ? "ring-2 ring-amber-300" : ""
                  }`}
                >



                  {/* Jeśli w slocie jest gracz – renderuj DRAGGABLE */}
                  {player ? (
                    <Draggable
                      draggableId={`player:${player.id}`}
                      index={0} // w slocie jest max 1 element
                    >
                      {(dragProvided) => (
                        <div
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <SquadSlot slot={{ ...slot, player }} />
                        </div>
                      )}



                    </Draggable>
                  ) : (


                    
                    // PUSTY SLOT – nadal musi być "obszarem droppa", żeby dało się tu upuścić
                    <SquadSlot slot={{ ...slot, player: null }} />
                  )}

                  {dropProvided.placeholder}
                </li>
              )}





            </Droppable>
          );
        })}


      </ul>
    </div>
  );
}
    </div>
  )
}

export default note
