import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination(props) {

  return (
    <div>
            <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={2}
        pageCount={props.totalPageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="page-item active"
        activeLinkClassName="page-link active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        disabledClassName="page-item disabled"
        disabledLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        />
    </div>
  )
}

export default Pagination