import React from "react";
import './App.css';
import Header from "./Components/NavBar/Header";
import ItemListContainer from "../src/Components/NavBar/ItemListContainer";
function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <ItemListContainer greeting="Course"/>
      </main>
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
