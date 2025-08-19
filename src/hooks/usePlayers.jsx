import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export function usePlayers() {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error("usePlayers must be used within a PlayerProvider");
  return context;
}
