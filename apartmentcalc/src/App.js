import logo from './logo.svg';
import './App.css';
import react from "react"

import Villa from "./components/villa/villa.js"
import Bostadsratt from "./components/bostadsratt/bostadsratt.js"
import bostadsratt from './components/bostadsratt/bostadsratt.js';


function App() {
  const [house, sethouse] = react.useState("bostadsratt");
  

  const selectBostadsratt = () => sethouse("bostadsratt");//vi vill egentligen inte göra detta men det funkar. Vi vill typ ha en ... function som updaterar ett värde genom att kolla all elelr ngt
  const selectVilla = () => sethouse("villa");

  return (
    <div className=" flex items-center flex-col bg-slate-800 h-screen space-y-4">
        
      <div>   
           <h1 className="text-slate-100 text-4xl">Modern Day Housing Calculator</h1>
      </div>
      <div> 
        <button onClick={selectBostadsratt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bostadsrätt</button>
        <button onClick={selectVilla} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Villa</button>
      </div>
 
    <div className="flex items-center justify-center h-1/3">
      {getView(house)}
    </div>
    
    </div>
  );
}

function getView(key) {
  switch (key) {
    case "villa":
      
      return <Villa/>


      case "bostadsratt":
        return <Bostadsratt/>
  
       
    
  
  }
}

export default App;
