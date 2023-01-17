function FinalePrice(props) {
  
    function returFinalPrice(){
        
        if (props.types == "bostadsratt") {
             let months = parseInt(props.data.avbetalningstid*12)
             let lan  = parseInt(props.data.inkopspris)-parseInt(props.data.kontantinstats)
             let amortering = parseInt(lan/months)
            let ranta = parseInt(lan *props.data.ranta/100)

            console.log(ranta)
            console.log(ranta/12)
            console.log(amortering)
            
            let finalprice = parseInt(amortering) + parseInt(ranta/12) + parseInt(props.data.el) + parseInt(props.data.varme) + parseInt(props.data.sopor)





            return parseInt(finalprice)
        }
        else{
            let months = parseInt(props.data.avbetalningstid)
            let lan  = parseInt(props.data.inkopspris)-parseInt(props.data.kontantinstats)
            let amortering = parseInt(lan/(months*12))
           let ranta = parseInt(lan *props.data.ranta/100)

           let finalprice = parseInt(amortering) + parseInt(ranta/12) + parseInt(props.data.ovrigt) + parseInt(props.data.avgift/12)

            return finalprice
        }


    }


  
    return (
      <div className="text-white font-bold text-xl mt-6">
            {returFinalPrice()} kr/Månad
      </div>
    );
  }
  
  export default FinalePrice;