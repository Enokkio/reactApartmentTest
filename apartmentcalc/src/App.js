import logo from './logo.svg';
import './App.css';
import react from "react"

import villa from "./components/villa/villa.js"
import bostadsratt from "./components/bostadsratt/bostadsratt.js"


function App() {

  const pages = {
    villa: villa,
    bostadsratt: bostadsratt,
};

  const [house, sethouse] = react.useState("null");
  const [page,setPage] = react.useState(()=>pages[house])
  

  const selectBostadsratt = () => sethouse("bostadsratt");//vi vill egentligen inte göra detta men det funkar. Vi vill typ ha en ... function som updaterar ett värde genom att kolla all elelr ngt
  const selectVilla = () => sethouse("villa");

  react.useEffect(() => {
    console.log(page)
    setPage(pages[house])
  }, [house]);

  return (
    <div className=" flex items-center flex-col bg-slate-800 h-screen">
        
      <div>   
           <h1 className="text-slate-100 text-4xl">Modern Day Housing Calculator</h1>
      </div>
      <div> 
        <button onClick={selectBostadsratt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bostadsrätt</button>
        <button onClick={selectVilla} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Villa</button>
      </div>
 
    <div className="flex items-center justify-center h-1/3">
    {page}
    </div>
    
    </div>
  );
}

export default App;
