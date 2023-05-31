import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { Link } from 'react-router-dom'
import {
	selectCategory,
	selectPage,
	selectSearch,
	selectSort
} from '../redux/filter/selectors'
import { selectMovies, selectSimilars } from '../redux/movies/selectors'
import { fetchMoviesData, filterOnSimilar } from '../redux/movies/slice'

type SimiliarProps = {
	id: number
}

const Similiar: React.FC<SimiliarProps> = ({ id }) => {
	const { sortValue } = useSelector(selectSort)
	const categoryValue = useSelector(selectCategory)
	const searchValue = useSelector(selectSearch)
	const currentPage = useSelector(selectPage)
	const items = useSelector(selectMovies)
	const similars = useSelector(selectSimilars)
	const dispatch = useDispatch()
	const dispatchApp = useAppDispatch()

	const fetchMovies = async () => {
		const sortBy = sortValue.startsWith('-')
			? sortValue.substring(1)
			: sortValue
		const order = sortValue.startsWith('-') ? 'asc' : 'desc'
		const category = categoryValue ? `category=${categoryValue}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		dispatchApp(
			fetchMoviesData({ sortBy, order, category, search, currentPage })
		)
	}

	React.useEffect(() => {
		fetchMovies()
	}, [sortValue, categoryValue, currentPage, searchValue])

	React.useEffect(() => {
		dispatch(filterOnSimilar(id))
	}, [items, id])

	return (
		<section className='similaries'>
			<div className='container'>
				<div className='title'>
					<h2>Похожие фильмы</h2>
				</div>
				<div className='similaries__wrapper'>
					{similars.map((item, index) => {
						if (index === 6) {
							return ''
						}
						return (
							<div key={index} className='similaries__item'>
								<Link to={`/movie/${item.id}`}>
									<img src={item.cardImg} alt={item.title} />
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Similiar
