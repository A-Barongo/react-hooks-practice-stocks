import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const [portfolioList,setPortfolioList]=useState([])
const [sortBy, setSortBy] = useState("Alphabetically");
const [filterBy, setFilterBy] = useState("Tech");

function addToPortfolio(stock){
    setPortfolioList(...portfolioList,stock)
}

function removeFromPortfolio(stock){
  setPortfolioList(portfolioList.filter((remaining)=>remaining.id!==stock.id))
}

function MainContainer() {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} removeFromPortfolio={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
