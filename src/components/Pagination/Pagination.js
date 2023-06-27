import React from "react";
import "./Pagination.css";

const Pagination = ({
  cardsPerPage,
  currentPage,
  setCurrentPage,
  setCardsPerPage,
  totalCards,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleCardsPerPageChange = (event) => {
    const newCardsPerPage = parseInt(event.target.value);
    setCardsPerPage(newCardsPerPage);
    setCurrentPage(1);
  };

  return (<>
    <div>   <span className="span-pagination">
    Page {currentPage} of {totalPages}
  </span></div>
    <div className="pagination">

      <button onClick={handleFirstPage}>First</button>
      <button disabled={currentPage === 1} onClick={handlePrevPage}>
        Prev
      </button>
      <select
        value={cardsPerPage}
        onChange={handleCardsPerPageChange}
      >
        <option value="8">8 cards per page</option>
        <option value="20">20 cards per page</option>
        {/* <option value="25">25 cards per page</option> */}
        <option value="40">40 cards per page</option>
      </select>
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </button>
      <button onClick={handleLastPage}>Last</button>
    </div>
    </>
  );
};

export default Pagination;
