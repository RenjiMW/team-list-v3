function AppDescription() {
  return (
    <div className="text-left">
      <h4 className="font-bold">App description</h4>
      <p>This is a simple rugby squad builder. You can use it to:</p>
      <ul className="list-disc pl-8">
        <li>Add a player's name to the list along with a URL to their photo</li>
        <li>Manage the display order on the list or remove players</li>
        <li>Add information about players</li>
        <li>Move players to the squad and manage positions</li>
      </ul>
    </div>
  );
}

export default AppDescription;
