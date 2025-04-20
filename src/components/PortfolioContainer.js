import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList,removeFromPortfolio}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>{
        portfolioList.map(stock=><Stock name={stock.name} price={stock.price} onClick={()=>removeFromPortfolio(stock)}/>)
      }
      </ul>
    </div>
  );
}

export default PortfolioContainer;
