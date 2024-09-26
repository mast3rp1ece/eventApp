import React from "react";
import clsx from "clsx";

const Pagination = ({ eventsPerPage, totalEvents, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex gap-2 text-indigo-100 p-5 justify-center">
        {pageNumbers.map((number) => (
          <li className="cursor-pointer" key={number}>
            <a
              onClick={() => paginate(number)}
              className={clsx(
                "select-none transition",
                number === currentPage ? "text-white" : "text-gray-500",
              )}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
