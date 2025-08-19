import { BrowserRouter, Route, Routes } from "react-router-dom";
import Starting from "./pages/Starting";
import Lists from "./pages/Lists";
import { PlayerProvider } from "./contexts/PlayerContext";

function App() {
  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Starting />} />
            <Route path="lists" element={<Lists />} />
          </Routes>
        </BrowserRouter>
      </PlayerProvider>
    </>
  );
}

export default App;
