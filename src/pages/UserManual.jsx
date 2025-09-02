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
