import React , {useState,useEffect} from 'react';
import Map from './Components/Map';
import './App.css';



import firebase from './firebase';

function App() {
  
  
  const [centers,setCenters] = useState([])
 
  useEffect(()=>{
    const centerRef = firebase.database().ref('vax_centres/')
    centerRef.on('value',(snapshot) =>{
    let newCenter = []
    snapshot.forEach(data=>{
      const centerVal = data.val()
      newCenter.push(centerVal)
      setCenters(newCenter)
      

    })
    console.log(newCenter)
    
    
  })

  },[])

  

  
 


  
  
  return (
    <div className="App">
     <h1>Vaccine Tracker</h1>
      <p>Find out where you can get the Covid vaccine in the area you are located in.</p>
     
     
    
     <Map centerData={centers}/>
    </div>
  );
}

export default App;
