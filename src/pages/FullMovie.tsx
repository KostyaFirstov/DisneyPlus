import React from 'react'
import { useParams } from 'react-router-dom'
import { IMovie } from './Movies'
import axios from 'axios'
import MovieHeader from '../components/MovieHeader'
import Comments from '../components/Comments'
import Similiar from '../components/Similiar'

const FullMovie = () => {
	const [movie, setMovie] = React.useState<IMovie>()
	const params = useParams()

	React.useEffect(() => {
		const getMovie = async () => {
			try {
				const { data } = await axios.get<IMovie>(
					`https://64672b8aba7110b663b11c76.mockapi.io/Movies/${params.id}`
				)

				setMovie(data)
			} catch (error) {
				console.log(error)
			}
		}

		getMovie()
	}, [])

	if (movie) {
		return (
			<>
				<MovieHeader {...movie} />
				<Comments {...movie} />
				<Similiar />
			</>
		)
	}

	return <h1>Loading...</h1>
}

export default FullMovie
