import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import MoviesSkeleton from '../components/MoviesSkeleton'
import Sort, { sortList } from '../components/Sort'
import Categories from '../components/Categories'

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
	const [items, setItems] = React.useState<IMovie[]>([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [sortValue, setSortValue] = React.useState(sortList[0])
	const [categorieActive, setCategorieActive] = React.useState(0)

	React.useEffect(() => {
		const fetchMovies = async () => {
			const sortBy = sortValue.sortValue.startsWith('-')
				? sortValue.sortValue.substring(1)
				: sortValue.sortValue

			const order = sortValue.sortValue.startsWith('-') ? 'asc' : 'desc'

			const category = categorieActive ? `category=${categorieActive}` : ''

			console.log(categorieActive)
			try {
				const { data } = await axios.get<IMovie[]>(
					`https://64672b8aba7110b663b11c76.mockapi.io/Movies?${category}&sortBy=${sortBy}&order=${order}`
				)

				setItems(data)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
			}
		}

		fetchMovies()
	}, [sortValue, categorieActive])

	const onChangeCategory = (i: number) => {
		setCategorieActive(i)
	}

	const changeSortValue = (item: number) => {
		setSortValue(sortList[item])
	}

	return (
		<section className='all-movies'>
			<div className='container'>
				<div className='all-movies__title title'>
					<h1>Фильмы</h1>
				</div>
				<div className='all-movies__filters'>
					<Categories
						value={categorieActive}
						onChangeCategory={i => onChangeCategory(i)}
					/>
					<Sort value={sortValue} changeSortValue={i => changeSortValue(i)} />
				</div>
				<div className='all-movies__container'>
					{isLoading === true
						? [...new Array(12)].map((item, index) => {
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
			</div>
		</section>
	)
}

export default Movies
