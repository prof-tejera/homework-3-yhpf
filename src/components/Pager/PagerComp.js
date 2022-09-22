import { useState } from "react";
import "./PagerComp.css";
import Button from "components/Button/Button";

// https://dev.to/codebucks/create-pagination-component-from-scratch-in-reactjs-45j5

// --- look at the props here and how they connect with Pager.js!!!
const PagerComp = ({numberOfPages, ...props}) => {

  // current page to start showing
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
  };
  
  const pages = [];
  for (var i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  
  const renderPageNumbers = pages.map((number) => { 
    return (
      <li
        key={number}
        onClick={handleClick}
        className={currentPage == number ? "active" : null}
      >
        <Button className="pagernumbers" id={number} text={number}/ >
      </li>
    );
  });

  return (
    <div>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
            className="pagerarrow"
          >
            <i className="fas fa-angle-left"></i>
          </button>
        </li>
       
        {renderPageNumbers}
        
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
            className="pagerarrow"
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};
  
  export default PagerComp;