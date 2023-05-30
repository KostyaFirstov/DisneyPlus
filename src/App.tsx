import React from 'react'
import './styles/index.css'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Best from './pages/Best'
import Movies from './pages/Movies'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import FullMovie from './pages/FullMovie'
import Favorites from './pages/Favorites'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/top' element={<Best />} />
					<Route path='/movie/:id' element={<FullMovie />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
