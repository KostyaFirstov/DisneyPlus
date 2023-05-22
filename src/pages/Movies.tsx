import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import MoviesSkeleton from '../components/MoviesSkeleton'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import {
	selectSort,
	selectCategory,
	selectSearch,
	selectPage
} from '../redux/filterSlice'
import {
	fetchMoviesData,
	selectMovies,
	selectStatus
} from '../redux/moviesSlice'
import { useAppDispatch } from '../redux/store'

export interface IMovie {
	id: number
	backgroundImg: string
	cardImg: string
	description: string
	duration: string
	title: string
	titleImg: string
	type: string
	year: string
	age: string
	rating: string
	genres: string[]
	members: { name: string; image: string; role: string }[]
	popularity: string
	comments: {
		name: string
		text: string
		date: string
		rating: string
		likes: string
	}[]
}

const Movies = () => {
	const { sortValue } = useSelector(selectSort)
	const loading = useSelector(selectStatus)
	const categoryValue = useSelector(selectCategory)
	const searchValue = useSelector(selectSearch)
	const currentPage = useSelector(selectPage)
	const items = useSelector(selectMovies)
	const dispatch = useAppDispatch()

	const fetchMovies = async () => {
		const sortBy = sortValue.startsWith('-')
			? sortValue.substring(1)
			: sortValue
		const order = sortValue.startsWith('-') ? 'asc' : 'desc'
		const category = categoryValue ? `category=${categoryValue}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		dispatch(fetchMoviesData({ sortBy, order, category, search, currentPage }))
	}

	React.useEffect(() => {
		fetchMovies()
	}, [sortValue, categoryValue, currentPage, searchValue])

	return (
		<section className='all-movies'>
			<div className='container'>
				<div className='all-movies__title title'>
					<h1>Фильмы</h1>
				</div>
				{searchValue && (
					<div className='all-movies__search'>
						<h2>
							Результаты по вашему запросу: <span>“{searchValue}”</span>
						</h2>
					</div>
				)}
				<div className='all-movies__filters'>
					<Categories />
					<Sort />
				</div>
				<div className='all-movies__container'>
					{loading === 'loading'
						? [...new Array(8)].map((item, index) => {
								return <MoviesSkeleton key={index} />
						  })
						: items.map(item => {
								return (
									<Link key={item.id} to={`/movie/${item.id}`}>
										<div className='all-movies__item'>
											<div className='all-movies__image'>
												<img src={item.cardImg} alt={item.title} />
											</div>
										</div>
									</Link>
								)
						  })}
				</div>
				<Pagination />
			</div>
		</section>
	)
}

export default Movies
