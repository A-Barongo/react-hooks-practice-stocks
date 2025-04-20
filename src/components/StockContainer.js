import React from "react";
import Stock from "./Stock";

const [stocks,setStocks]=useState([])
const [selectedStock,setSelectedStock]=useState()

useEffect(() => {
  fetch('http://localhost:3001')
  .then(res=>res.json())
  .then(data=>setStocks(data))

  
}, [])



function StockContainer({addToPortfolio}) {
  return (
    <div>
      <h2>Stocks</h2>
      <ul>
      {stocks.map(item=><Stock key={item.id}name={item.name} price={item.price} onClick={()=>addToPortfolio(item)}/>)}
      </ul>
    </div>
  );
}

export default StockContainer;
