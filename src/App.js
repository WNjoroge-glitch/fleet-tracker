import Map from './Components/Map'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Vaccine tracking</h1>
     <p>Find out where you can get the Covid vaccine in the area you are located in.</p>
     <input type='text' placeholder="Search for area"/>

     <Map/>
    </div>
  );
}

export default App;
