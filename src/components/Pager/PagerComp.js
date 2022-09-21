import { useState } from "react";
import "./PagerComp.css";

// https://dev.to/codebucks/create-pagination-component-from-scratch-in-reactjs-45j5

// --- look at the props here and how they connect with Pager.js!!!
const PagerComp = ({numberOfPages, current, ...props}) => {

  // current page to start showing
  const [currentPage, setCurrentPage] = useState(1);
  // items shown per page
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // --- the the limit for page numbers shown is not working!!!!
  // --- we dont set setpageNumberLimit anywhere!!!!
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  // just picked 100 items in total
  const items = 100;
  for (let i = 1; i <= Math.ceil(items / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  
   const renderPageNumbers = pages.map((number) => { 
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          <div className="pagernumbers">{number}</div>
        </li>
      );
  });
  
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // ... indication more pages to show with higher numbers
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }
  // ... indication more pages to show with lower numbers
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

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
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
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