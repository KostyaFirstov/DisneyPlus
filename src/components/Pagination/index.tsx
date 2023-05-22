import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'

type PaginationProps = {
	changePage: (i: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ changePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={i => changePage(i.selected + 1)}
			pageRangeDisplayed={8}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
