import Nav from "../components/Nav";

function FiledDisplay() {
  return (
    <div className="min-h-screen w-full  bg-sky-950 text-sky-50 ">
      <div>
        <Nav />

        <article className="mx-auto max-w-3xl px-4 py-8 text-slate-800 dark:text-slate-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Application Description
            </h1>
            <p className="mt-2 text-lg">
              <span className="font-semibold">Squad Builder</span> is a web
              application designed to manage a list of available players and the
              match squad (15 starting players and 8 substitutes) for a rugby
              team. It also allows editing player attributes and visualizing
              player positions on a graphical representation of the field.
            </p>
          </header>

          {/* 1) Data storage */}
          <section className="mb-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-semibold">1) Data storage</h2>
              <p className="mt-2">
                Currently, the application does not provide user registration.
                Data is stored in the browser’s local storage and remains
                available only on the same device until manually deleted during
                browsing data cleanup.
              </p>
            </div>
          </section>

          {/* 2) Creating a new player */}
          <section className="mb-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-semibold">
                2) Creating a new player
              </h2>
              <p className="mt-2">
                To add a new player, click the{" "}
                <span className="font-medium">“Add player”</span> button in the
                player list. In the popup window you can:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>
                  Enter a name (different from the ones already on the list)
                </li>
                <li>
                  Choose an avatar image:
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Default avatar</li>
                    <li>One of 6 available avatars</li>
                    <li>Custom avatar via URL</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* 3) Player element */}
          <section className="mb-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-semibold">3) Player element</h2>
              <p className="mt-2">
                Each player is displayed as a rectangular card containing an
                avatar, a name, and four functional buttons:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>⚙ detailed view and attribute editing</li>
                <li>🔍 quick view of basic information</li>
                <li>❌ delete player</li>
                <li>▶ assign player to the squad list</li>
              </ul>

              {/* 3.1 Editing a player */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold">3.1) Editing a player</h3>
                <p className="mt-2">
                  To edit player data, click the gear icon (⚙) and select{" "}
                  <span className="font-medium">[Edit 🛠]</span>. Editable data
                  includes:
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Avatar</li>
                  <li>Weight</li>
                  <li>Height</li>
                  <li>Age</li>
                  <li>Experience</li>
                  <li>Main field position</li>
                  <li>Alternative positions</li>
                </ul>
                <p className="mt-3">
                  Confirm changes with the{" "}
                  <span className="font-medium">[Save 💾]</span> button.
                </p>
              </div>

              {/* 3.2 Viewing basic attributes */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  3.2) Viewing basic attributes
                </h3>
                <p className="mt-2">
                  Clicking the 🔍 icon expands an additional section below the
                  player card, displaying detailed information.
                </p>
              </div>

              {/* 3.3 Deleting a player */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  3.3) Deleting a player
                </h3>
                <p className="mt-2">
                  The ❌ option opens a confirmation dialog to remove the player
                  from the application.
                </p>
              </div>

              {/* 3.4 Assigning a player */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  3.4) Assigning a player to the squad list
                </h3>
                <p className="mt-2">
                  When the ▶ button is clicked, the player is assigned to the
                  first available position in the squad.
                </p>
              </div>
            </div>
          </section>

          {/* 4) Managing lists */}
          <section className="mb-6 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-semibold">4) Managing lists</h2>
              <p className="mt-2">
                You can change the order of players in the available list and
                assign them to the squad via drag-and-drop with the mouse.
              </p>
            </div>
          </section>

          {/* 5) Field view */}
          <section className="mb-2 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 shadow-sm">
            <div className="p-5">
              <h2 className="text-xl font-semibold">5) Field view</h2>
              <p className="mt-2">
                The squad view with a field visualization is available by
                clicking <span className="font-medium">“Field Display”</span>.
                Hovering over a position on the field highlights the
                corresponding player in the squad list, and vice versa —
                hovering over a player highlights their position on the field.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default FiledDisplay;

/*
function FiledDisplay() {
  return (
    <div className="min-h-screen w-full  bg-sky-950 text-sky-50 ">
      <div>
        <Nav />
        <div className="flex flex-col items-center pt-5">
          <h1 className="font-bold text-2xl">User manual</h1>
          <h3 className="mt-5">🚧 This page is under construction 🚧</h3>
          <div className="flex flex-col items-center w-xl">
            <section>
              <h2 className="font-bold text-xl mt-4">Application Guide</h2>
              <p className="mt-1">
                This app is designed to help you manage rugby players and
                organize your match squad. With it, you can quickly add new
                players, edit the list of available players, and build a
                complete match lineup.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-xl mt-4">
                What you can do in the app:
              </h2>
              <ul className="list-disc pl-7">
                <li className="mt-1 ">
                  <spam className="font-bold">Add a new player</spam> - enter
                  the player's name and (optionally) provide an image URL to use
                  as their avatar.
                </li>
                <li className="mt-1">
                  <spam className="font-bold">Reorder players on the list</spam>{" "}
                  - grab a player with your mouse and drag them to the desired
                  position.
                </li>
                <li className="mt-1">
                  <spam className="font-bold">Set up your match squad</spam> -
                  drag a player onto a chosen position (whether empty or already
                  occupied).
                </li>
                <li className="mt-1">
                  <spam className="font-bold">Swap players</spam> - drag one
                  player onto another to switch their positions.
                </li>
                <li className="mt-1">
                  <spam className="font-bold">Add players to the squad</spam>{" "}
                  using a button as well. avatar.
                </li>
                <li className="mt-1">
                  <spam className="font-bold">
                    Remove players from the squad
                  </spam>{" "}
                  with a single click.
                </li>
                <li className="mt-1">
                  <spam className="font-bold">Completely delete a player</spam>{" "}
                  from the app if they're no longer needed.
                </li>
              </ul>
            </section>
          </div>
          <h3 className="mt-5">🚧 This page is under construction 🚧</h3>
        </div>
      </div>
    </div>
  );
} 
  

            <section>
              <h3>
                1) Data storage Currently, the application does not provide user
                registration. Data is stored in the browser’s local storage and
                remains available only on the same device until manually deleted
                during browsing data cleanup.
              </h3>
              <h3>
                2) Creating a new player To add a new player, click the “Add
                player” button in the player list. In the popup window, enter a
                name (different from the ones already on the list), choose an
                avatar image – either the default one or from a set of 6
                available avatars. You can also add a custom avatar via a URL.
              </h3>
              <h3>
                3) Player element Each player is displayed as a rectangular card
                containing an avatar, a name, and four functional buttons: ⚙
                detailed view and attribute editing 🔍 quick view of basic
                information ❌ delete player ▶ assign player to the squad list
              </h3>
              <h3></h3>
              <h3></h3>
              <h3></h3>
            </section>
*/
