function AppDescription() {
  return (
    <div className="text-left">
      <h4 className="font-bold">App description</h4>
      <p>This is a simple rugby squad builder. You can use it to:</p>
      <ul className="list-disc pl-7">
        <li className="mt-1 ">
          <span className="font-bold">Add a new player</span> - enter the
          player's name and (optionally) provide an image URL to use as their
          avatar.
        </li>
        <li className="mt-1">
          <span className="font-bold">Reorder players on the list</span> - grab
          a player with your mouse and drag them to the desired position.
        </li>
        <li className="mt-1">
          <span className="font-bold">Set up your match squad</span> - drag a
          player onto a chosen position (whether empty or already occupied) or
          just move player to match squad using a button.
        </li>
        <li className="mt-1">
          <span className="font-bold">Swap players</span> - drag one player onto
          another to switch their positions.
        </li>
        <li className="mt-1">
          <span className="font-bold">Remove players from the squad</span> with
          a single click or
        </li>
        <li className="mt-1">
          <span className="font-bold">Completely delete a player</span> from the
          app if they're no longer needed.
        </li>
      </ul>
    </div>
  );
}

export default AppDescription;

/*
      <ul className="list-disc pl-8">
        <li>Add a player's name to the list along with a URL to their photo</li>
        <li>Manage the display order on the list or remove players</li>
        <li>Add information about players</li>
        <li>Move players to the squad and manage positions</li>
      </ul>


            
*/
