import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagenation.module.scss'

const Pagenation = ({ currentPage, onChangePage, totalPages }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={totalPages}
      previousLabel="<"
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagenation
