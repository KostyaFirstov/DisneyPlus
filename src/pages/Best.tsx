import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import MoviesSkeleton from '../components/MoviesSkeleton'
import { IMovie } from './Movies'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Best = () => {
	const [popular, setPopular] = React.useState<IMovie[]>()
	React.useEffect(() => {
		const getMovie = async () => {
			try {
				const { data } = await axios.get<IMovie[]>(
					'https://64672b8aba7110b663b11c76.mockapi.io/Movies?page=1&limit=10&&sortBy=popularity&order=desc'
				)

				setPopular(data)
			} catch (error) {
				console.log(error)
			}
		}

		getMovie()
	}, [])

	return (
		<section className='all-movies'>
			<div className='container'>
				<div className='all-movies__title title'>
					<h1>Самое популярное</h1>
				</div>
				<div className='top-movies__container'>
					{!popular
						? [...new Array(8)].map((item, index) => {
								return <MoviesSkeleton key={index} />
						  })
						: popular.map((item, index) => {
								return (
									<Link key={item.id} to={`/movie/${item.id}`}>
										<div className='all-movies__item top-movies__item'>
											<div className='all-movies__image'>
												<img src={item.backgroundImg} alt={item.title} />
											</div>
											<div className='top-movies__info'>
												<div className='top-movies__title'>
													<h2>{item.title}</h2>
												</div>
												<div className='top-movies__place'>
													{index + 1} <span>{item.popularity}</span>
												</div>
											</div>
											<div className='top-movies__blur'></div>
										</div>
									</Link>
								)
						  })}
				</div>
			</div>
		</section>
	)
}

export default Best
