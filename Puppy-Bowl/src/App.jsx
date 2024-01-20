import React from "react";
import Players from "./components/AllPlayers";
import Player from "./components/SinglePlayer";
import Navbar from "./components/Navbar";
import NewPlayerForm from "./components/NewPlayer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path={"/players/:id"} element={<Player />} />
          <Route path="/players/" element={<NewPlayerForm />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
