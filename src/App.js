import React from "react";
import './App.css';
import Header from "./Components/NavBar/Header";

import ItemListContainer from "../src/Components/NavBar/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </main>
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
