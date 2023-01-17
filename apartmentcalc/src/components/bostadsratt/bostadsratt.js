import react from "react"
import FinalePrice from "../finalPrice/finalpricecalc.js"
function Bostadsratt(props) {


    const [formData,setFormData] = react.useState({
        inkopspris:"0",
        kontantinstats: "0",
        ranta:"0",
        el: "0",
        sopor:"0",
        varme:"0",
        avbetalningstid:"0",
    })



    function minValue(){
        
        return formData.inkopspris*0.15
    }
    
    function handleChange(event) {    
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
 


    return (
        <div className="flex flex-col items-center justify-center ">
        <h1 className="text-slate-100 text-2xl">Villa</h1>
        <div className = "w-full flex flex-col items-center justify-center">

        <label className="block text-white text-l font-bold mb-2" >
        Inköpspris: {formData.inkopspris}kr
      </label>
        <input type="range"
        name="inkopspris"
        max={20000000}
        min={0}
        step ={25000}
        defaultValue ={0}
        onChange={handleChange} />


    <label className="block text-white text-l font-bold mb-2" >
        Kontantinstats: {formData.kontantinstats}kr (min 15%)
      </label>
        <input type="range"
        name="kontantinstats"
        max={formData.inkopspris}
        min={minValue()}
        step ={10000}
        defaultValue ={minValue()}
        onChange={handleChange} />

    <label className="block text-white text-l font-bold mb-2" >
        Ränta: {formData.ranta}%
      </label>
        <input type="range"
        name="ranta"
        max={15}
        min={0}
        step ={0.1}
        defaultValue ={0}
        onChange={handleChange} />

    <label className="block text-white text-l font-bold mb-2" >
        El: {formData.el}kr
      </label>
        <input type="range"
        name="el"
        max={40000}
        min={0}
        step ={100}
        defaultValue ={0}
        onChange={handleChange} />

    <label className="block text-white text-l font-bold mb-2" >
       Sopor: {formData.sopor}kr
      </label>
        <input type="range"
        name="sopor"
        max={40000}
        min={0}
        step ={100}
        defaultValue ={0}
        onChange={handleChange} />

    
     <label className="block text-white text-l font-bold mb-2" >
       Värme: {formData.varme}kr
      </label>
        <input type="range"
        name="varme"
        max={40000}
        min={0}
        step ={100}
        defaultValue ={0}
        onChange={handleChange} />

        
    <label className="block text-white text-l font-bold mb-2" >
       Avbetalningstid: {formData.avbetalningstid} År
      </label>
        <input type="range"
        name="avbetalningstid"
        max={30}
        min={0}
        step ={1}
        defaultValue ={0}
        onChange={handleChange} />


        </div>

        <FinalePrice
        types = {props.type}
        data = {formData}
        />
      </div>
    );
  }
  
  export default Bostadsratt;