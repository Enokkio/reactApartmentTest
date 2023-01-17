import logo from './logo.svg';
import './App.css';
import react from "react"

function App() {
  const [house, sethouse] = react.useState("null");

  const selectBostadsratt = () => sethouse("bostadsratt");
  const selectVilla = () => sethouse("villa");


  return (
    <div className="App bg-slate-800 h-screen">
        
      <h1 className="text-slate-100 text-4xl">Modern Day Housing Calculator</h1>

    <button onClick={selectBostadsratt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bostadsrätt</button>
    <button onClick={selectVilla} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Villa</button>


    </div>
  );
}

export default App;
