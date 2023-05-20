import React from 'react'
import './styles/index.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Best from './pages/Best'
import Search from './pages/Search'
import Movies from './pages/Movies'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import FullMovie from './pages/FullMovie'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/top' element={<Best />} />
					<Route path='/search' element={<Search />} />
					<Route path='/movie/:id' element={<FullMovie />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
