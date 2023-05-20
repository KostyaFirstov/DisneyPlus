import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import MoviesSkeleton from '../components/MoviesSkeleton'

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
	comments: { name: string; text: string; date: string; rating: string }[]
}

const Movies = () => {
	const [items, setItems] = React.useState<IMovie[]>([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		const fetchMovies = async () => {
			try {
				const { data } = await axios.get<IMovie[]>(
					'https://64672b8aba7110b663b11c76.mockapi.io/Movies'
				)

				setItems(data)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
			}
		}

		fetchMovies()
	}, [])

	return (
		<section className='all-movies'>
			<div className='container'>
				<div className='all-movies__title title'>
					<h1>Фильмы</h1>
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
