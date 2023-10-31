// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonData } from "./components/PokemonDatas";
import Halaman1 from "./components/hals1";
import Halaman2 from "./components/hals2";
import Button from "./components/Pokemonlink";  


function App() {
  return (
    <>
      <div className="container">
        <h1>TugasMod5_RPLBK_Kel31</h1>


        <PokemonData>
          <div className="content">
            <Router>
              <Routes>
                <Route path="/" element={<Halaman1 />} />
                <Route path="/hal2" element={<Halaman2 />} />
              </Routes>
              <Button />
            </Router>
          </div>
        </PokemonData>
      </div>
    </>
  );
}

export default App;

