import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";
import ReactPaginate from "react-paginate";
const PaginationComponent = ({ length, page, setPage }) => {
  const handlePageClick = (value) => {
    setPage(value.selected + 1);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <ReactPaginate
        breakLabel={<HiDotsHorizontal />}
        breakClassName="p-1 text-xl text-blue-600"
        nextClassName="dark:bg-black bg-white text-2xl p-1 border md:text-xl rounded-full"
        nextLabel={<LiaAngleRightSolid />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={length}
        previousLabel={<LiaAngleLeftSolid />}
        previousClassName="dark:bg-black bg-white text-2xl p-1 border md:text-xl rounded-full"
        activeClassName={'bg-[#0077b6] dark:bg-[#0077b6] text-white'}
        containerClassName="flex justify-center items-center gap-4 w-full flex-wrap"
        pageClassName="h-[2.1rem] w-[2.1rem] flex justify-center items-center
         rounded-full dark:bg-black bg-white rounded-full text-sm font-semibold
          hover:bg-[#0077b6] dark:hover:bg-[#0077b6] hover:text-white cursor-pointer transition-all ease-linear duration-300"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationComponent;

{
  /* <Pagination className="cursor-pointer">
<PaginationContent>
  <PaginationItem>
    <PaginationPrevious
      onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
    />
  </PaginationItem>
  {Array.from({ length: length }, (item, index) => (
    <PaginationItem key={index}>
      <PaginationLink
        onClick={() => setPage(index + 1)}
        isActive={page === index + 1 ? true : false}
      >
        {length / 2 === index + 1 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : index+1}

      </PaginationLink>
    </PaginationItem>
  ))}

  <PaginationItem>
    <PaginationNext
      onClick={() =>
        setPage((prev) => (prev < length ? prev + 1 : prev))
      }
    />
  </PaginationItem>
</PaginationContent>
</Pagination> */
}
