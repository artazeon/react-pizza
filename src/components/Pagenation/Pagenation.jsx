import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagenation.module.scss'

const Pagenation = ({ pagenation, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={pagenation.total_pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagenation
