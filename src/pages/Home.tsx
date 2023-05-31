import React from 'react'
import MovieHeader from '../components/MovieHeader'
import TopMovies from '../components/TopMovies'
import Brands from '../components/Brands'
import Slider from '../components/Slider'
import { IMovie } from './Movies'
import axios from 'axios'
import { Loader } from '../components/Loader'

const Home = () => {
	const [popular, setPopular] = React.useState<IMovie[]>()
	const [all, setAll] = React.useState<IMovie[]>()

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

	React.useEffect(() => {
		const getMovie = async () => {
			try {
				const { data } = await axios.get<IMovie[]>(
					'https://64672b8aba7110b663b11c76.mockapi.io/Movies'
				)

				setAll(data)
			} catch (error) {
				console.log(error)
			}
		}

		getMovie()
	}, [])

	if (popular) {
		return (
			<>
				<MovieHeader {...popular[0]} />
				<Brands />
				{popular && (
					<TopMovies link={'/top'} name='Самое популярное' movies={popular} />
				)}
				{all && <Slider link={'/movies'} name='Все фильмы' movies={all} />}
			</>
		)
	}

	return <Loader />
}

export default Home
