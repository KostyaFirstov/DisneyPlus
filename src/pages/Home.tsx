import React from 'react'
import MovieHeader from '../components/MovieHeader'
import TopMovies from '../components/TopMovies'
import Brands from '../components/Brands'
import Slider from '../components/Slider'

const Home = () => {
	return (
		<>
			{/* <MovieHeader {...[]} /> */}
			<Brands />
			<TopMovies />
			<Slider name='Топ фильмов' />
		</>
	)
}

export default Home
