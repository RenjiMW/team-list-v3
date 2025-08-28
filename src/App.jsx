import { BrowserRouter, Route, Routes } from "react-router-dom";
import Starting from "./pages/Starting";
import Lists from "./pages/Lists";
import { PlayerProvider } from "./contexts/PlayerContext";
import FiledDisplay from "./pages/FieldDisplay";
import UserManual from "./pages/UserManual";

function App() {
  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Starting />} />
            <Route path="lists" element={<Lists />} />
            <Route path="manual" element={<UserManual />} />
            <Route path="field" element={<FiledDisplay />} />
          </Routes>
        </BrowserRouter>
      </PlayerProvider>
    </>
  );
}

export default App;
