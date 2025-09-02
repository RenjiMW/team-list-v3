import { createContext, useEffect, useReducer } from "react";
import { getPositionName } from "../hooks/getPositionName";

const PlayerContext = createContext();

// for dev mode
// const avatarsArr = [
//   "../../public/avatars/1-avatar.png",
//   "../../public/avatars/2-avatar.png",
//   "../../public/avatars/3-avatar.png",
//   "../../public/avatars/4-avatar.png",
//   "../../public/avatars/5-avatar.png",
//   "../../public/avatars/6-avatar.png",
// ];

// for prod mode
const avatarsArr = [
  "/avatars/1-avatar.png",
  "/avatars/2-avatar.png",
  "/avatars/3-avatar.png",
  "/avatars/4-avatar.png",
  "/avatars/5-avatar.png",
  "/avatars/6-avatar.png",
];

const makeEmptySlot = (slotId) => ({
  slotId,
  positionName: getPositionName(slotId),
  occupantId: null,
});

const emptySlots = Array.from({ length: 23 }, (_, i) =>
  makeEmptySlot(`slot-${i + 1}`)
);

const initialState = {
  availablePlayers: [],
  squadPlayers: emptySlots,
};

const loadInitialState = () => {
  const stateFromStorage = localStorage.getItem("appState");
  return stateFromStorage ? JSON.parse(stateFromStorage) : initialState;
};

const normalize = (str) => (str || "").trim().toLocaleLowerCase();

/////////////////////////////////////////////
/////////////////////////////////////////
// REDUCER FUNCTION
//
function reducer(state, action) {
  switch (action.type) {
    // ======== creating players
    case "player/created": {
      const newPlayer = action.payload;

      const inSquadPlayers = state.availablePlayers.filter(
        (player) => player.inSquad === true
      );

      const notInSquadPlayers = state.availablePlayers.filter(
        (player) => player.inSquad === false
      );

      const updatedPlayers = [
        ...notInSquadPlayers,
        newPlayer,
        ...inSquadPlayers,
      ];

      return {
        ...state,
        availablePlayers: updatedPlayers,
      };
    }

    // ======== deleting players
    case "player/delete": {
      return {
        ...state,
        availablePlayers: state.availablePlayers.filter(
          (player) => player.id !== action.payload.id
        ),
      };
    }

    ///////////////////////////////////////////
    // DnD Action 🔱
    // ======== reordering players
    case "players/reorder": {
      // console.log("action.payload=", action.payload);
      const { from, to } = action.payload;
      if (from === to) return state;
      // console.log(from, to);

      const next = [...state.availablePlayers];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);

      return { ...state, availablePlayers: next };
    }

    ///////////////////////////////////////////
    // DnD Action 🔱
    // ======== moving player to squad (could be done by button)
    case "squad/assign": {
      const { playerId, slotId } = action.payload; // rozkładam ładunek na zmienne

      // 1) sprawdź, czy gracz istnieje i nie jest już w składzie
      const availablePlayerIndex = state.availablePlayers.findIndex(
        (p) => p.id === playerId
      );

      if (availablePlayerIndex === -1) return state;

      if (state.availablePlayers[availablePlayerIndex].inSquad) return state;

      // 2) znajdź docelowy slot (albo pierwszy wolny)
      const sIndex =
        slotId != null
          ? state.squadPlayers.findIndex((s) => s.slotId === slotId)
          : state.squadPlayers.findIndex((s) => s.occupantId == null);
      if (sIndex === -1) return state;

      // FIXME: tutaj powinna się odpalać akcja wymiany zawodników
      if (state.squadPlayers[sIndex].occupantId) return state;

      // 3) zaktualizuj flagę gracza
      const updatedPlayers = state.availablePlayers.map((p, i) =>
        i === availablePlayerIndex ? { ...p, inSquad: true } : p
      );

      const player = updatedPlayers.splice(availablePlayerIndex, 1)[0];
      updatedPlayers.push(player);

      // 4) wpisz occupantId w slocie
      const nextSlots = state.squadPlayers.map((s, i) =>
        i === sIndex ? { ...s, occupantId: playerId } : s
      );

      // zwróć stan i zapisz zaktualizuj tablice
      return {
        ...state,
        availablePlayers: updatedPlayers,
        squadPlayers: nextSlots,
      };
    }

    ///////////////////////////////////////////
    // DnD Action 🔱
    // ======== kicking player from squad / aslo done by button
    case "squad/unassign": {
      const { slotId, destinationIndex } = action.payload;

      const sIndex = state.squadPlayers.findIndex((s) => s.slotId === slotId);
      if (sIndex === -1) return state;

      const occupantId = state.squadPlayers[sIndex].occupantId;
      if (!occupantId) return state;

      // 1) wyczyść slot
      const nextSlots = state.squadPlayers.map((slot, index) =>
        index === sIndex ? { ...slot, occupantId: null } : slot
      );

      // 2) wyczyść flagę gracza
      const nextPlayers = state.availablePlayers.map((p) =>
        p.id === occupantId ? { ...p, inSquad: false } : p
      );

      const playerIndex = nextPlayers.findIndex(
        (player) => player.id === occupantId
      );

      // If destinationIndex is undefined: index = 0
      const player = nextPlayers.find((player) => player.id === occupantId);
      nextPlayers.splice(playerIndex, 1);
      nextPlayers.splice(destinationIndex, 0, player);

      return {
        ...state,
        availablePlayers: nextPlayers,
        squadPlayers: nextSlots,
      };
    }

    ///////////////////////////////////////////
    // DnD Action 🔱
    // ======== swap in squad
    case "squad/swap": {
      const { fromSlotId, toSlotId } = action.payload;
      if (fromSlotId === toSlotId) return state;

      const slots = state.squadPlayers.slice();
      const i = slots.findIndex((s) => s.slotId === fromSlotId);
      const j = slots.findIndex((s) => s.slotId === toSlotId);
      if (i === -1 || j === -1) return state;

      const a = slots[i].occupantId;
      const b = slots[j].occupantId;

      // atomowy swap occupantów
      slots[i] = { ...slots[i], occupantId: b };
      slots[j] = { ...slots[j], occupantId: a };

      return { ...state, squadPlayers: slots };
    }

    case "player/edit": {
      const edited = action.payload;

      const updatedPlayers = state.availablePlayers.map((player) =>
        player.id === edited.id ? { ...player, ...edited } : player
      );

      return { ...state, availablePlayers: updatedPlayers };
    }

    default:
      return state;
  }
}

/////////////////////////////////////////////
/////////////////////////////////////////
// Provider function
//
function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  ///////////////////////////////////////
  // DELETE PLAYER LOGIC
  const deletePlayer = (deletedPlayer) => {
    const exists = state.availablePlayers.some(
      (player) => player.id === deletedPlayer.id
    );
    if (!exists) return;

    dispatch({ type: "player/delete", payload: deletedPlayer });
  };

  ///////////////////////////////////////
  // CREATE PLAYER LOGIC
  const genId = () =>
    crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const createPlayer = (newPlayer) => {
    let avatar;

    if (newPlayer.avatarType === "pick") {
      avatar = avatarsArr[newPlayer.avatarIdx];
    } else if (newPlayer.avatarType === "default") {
      avatar = avatarsArr[2];
    } else if (newPlayer.avatarType === "urlAddress") {
      avatar = newPlayer.avatarUrl;
    }

    const playerToAdd = {
      id: genId(),
      name: newPlayer.name.trim(),
      avatar,
      inSquad: false,
    };

    const willDuplicate = state.availablePlayers.some(
      (p) => normalize(p.name) === normalize(newPlayer.name)
    );
    if (willDuplicate) {
      return { ok: false, reason: "exists" };
    }

    // const id = genId();
    dispatch({ type: "player/created", payload: playerToAdd });
    return { ok: true };
  };

  ///////////////////////////////////////
  // ADD TO SQUAD LOGIC
  const assignToSquad = (playerId, slotId) => {
    dispatch({ type: "squad/assign", payload: { playerId, slotId } });
  };

  ///////////////////////////////////////
  // KICK FROM SQUAD
  const unassignFromSquad = (slotId, destinationIndex) => {
    dispatch({ type: "squad/unassign", payload: { slotId, destinationIndex } });
  };

  ///////////////////////////////////////
  // EditPlayer
  const editPlayer = (editedPlayer) => {
    const otherPlayersNames = state.availablePlayers.filter(
      (player) => player.id !== editedPlayer.id
    );

    const willDuplicate = otherPlayersNames.some(
      (player) => normalize(player.name) === normalize(editedPlayer.name)
    );

    if (willDuplicate) {
      return { ok: false, reason: "exists" };
    }

    dispatch({ type: "player/edit", payload: editedPlayer });
    return { ok: true };
  };

  ///////////////////////////////////////
  // REORDER
  // const reorder = () => {};

  ///////////////////////////////////////
  // return
  return (
    <PlayerContext.Provider
      value={{
        ...state,
        createPlayer,
        deletePlayer,
        dispatch,
        assignToSquad,
        unassignFromSquad,
        editPlayer,
        avatarsArr,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export { PlayerContext, PlayerProvider };
