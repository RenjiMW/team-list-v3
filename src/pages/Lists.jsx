import AvailablePlayers from "../components/list-components/AvailablePlayers";
import SquadList from "../components/list-components/SquadList";
import Nav from "../components/Nav";
import { useState } from "react";
import AddPlayer from "../components/AddPlayer";
import { DragDropContext } from "@hello-pangea/dnd";
import { usePlayers } from "../hooks/usePlayers";

function Lists() {
  const [addingPlayer, setAddingNewPlayer] = useState(false);

  const { assignToSquad, unassignFromSquad, squadPlayers, dispatch } =
    usePlayers();

  const handleAddPlayer = function () {
    setAddingNewPlayer(true);
  };

  const handleCloseAddPlayer = function () {
    setAddingNewPlayer(false);
  };

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  //////////////// D&D
  //

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    // console.log("🟢 result: ", result);

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // ŹRÓDŁO i CEL
    const fromAvail = source.droppableId === "available-list";
    const toAvail = destination.droppableId === "available-list";
    const fromSlot = source.droppableId.startsWith("slot-");
    const toSlot = destination.droppableId.startsWith("slot-");

    const playerId = draggableId;

    // 1) Available -> Slot : przypisz do slotu
    if (fromAvail && toSlot) {
      console.log("✔ Available -> Slot");

      // check if occupied
      const i = squadPlayers.findIndex(
        (slot) => slot.slotId === destination.droppableId
      );

      if (squadPlayers[i].occupantId)
        unassignFromSquad(destination.droppableId);

      assignToSquad(playerId, destination.droppableId);
      return;
    }

    // 2) Slot -> Available : wyrzuć ze składu
    if (fromSlot && toAvail) {
      console.log("⭐ unassign", source.droppableId, destination.index);
      unassignFromSquad(source.droppableId, destination.index);
      return;
    }

    // FIXME: te funckje dispatch powinne być zdefiniowane w PlayerContext
    // 3) Slot -> Slot : (opcjonalnie) swap
    if (fromSlot && toSlot) {
      // console.log(source.droppableId);
      dispatch({
        type: "squad/swap",
        payload: {
          fromSlotId: source.droppableId,
          toSlotId: destination.droppableId,
        },
      });
      return;
    }

    // 4) Available -> Available : reorder widocznych
    if (fromAvail && toAvail) {
      dispatch({
        type: "players/reorder",
        payload: { from: source.index, to: destination.index },
      });
      return;
    }
  }
  //////////////// D&D
  ////////////////////////////////////////////////////////////

  return (
    <>
      <div className="min-h-screen w-full  bg-sky-950 text-sky-50">
        {addingPlayer && <AddPlayer closeModal={handleCloseAddPlayer} />}

        <div>
          <Nav />
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start lg:gap-3 xl:gap-12 py-8 px-4 xs:px-0">
              <AvailablePlayers addPlayer={handleAddPlayer} />
              <SquadList />
            </div>
          </DragDropContext>
        </div>
      </div>
    </>
  );
}

export default Lists;
