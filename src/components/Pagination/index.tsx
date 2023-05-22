import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/filterSlice'

const Pagination: React.FC = () => {
	const dispatch = useDispatch()

	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={i => dispatch(setCurrentPage(i.selected + 1))}
			pageRangeDisplayed={8}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
