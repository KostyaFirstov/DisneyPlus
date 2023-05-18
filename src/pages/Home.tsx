import React from 'react'
import Header from '../components/Header'
import MovieHeader from '../components/MovieHeader'
import TopMovies from '../components/TopMovies'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<>
			<Header />
			<MovieHeader />
			<Brands />
			<TopMovies />
			<Footer />
		</>
	)
}

export default Home
