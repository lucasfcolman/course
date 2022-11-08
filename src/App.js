import logo from './logo.svg';
import './App.css';
import "./Components/NavBar/NavBar";
import "./Components/NavBar/ItemListContainer";
function App() {
  return (
    <div className="App">
      <main>
        <ItemListContainer></ItemListContainer>
      </main>
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
