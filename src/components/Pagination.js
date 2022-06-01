import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

function Pagination(props) {

  return (
    <Row className='py-3'>
      <Col>
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
      </Col>
    </Row>
  )
}

export default Pagination