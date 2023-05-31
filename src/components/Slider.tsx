import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { IMovie } from '../pages/Movies'

export interface ISliderProps {
	name: string
	link: string
	movies: IMovie[]
}

const Slider: React.FC<ISliderProps> = ({ name, link, movies }) => {
	return (
		<section className='movies'>
			<div className='movies__container'>
				<Link to={link} className='movies__title title container-right'>
					<h2>{name}</h2>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8.1141 4.31357C8.53219 3.89548 9.20625 3.89548 9.62434 4.31357L16.7148 11.404C17.0475 11.7368 17.0475 12.2743 16.7148 12.6071L9.62434 19.6975C9.20625 20.1156 8.53219 20.1156 8.1141 19.6975C7.69601 19.2794 7.69601 18.6054 8.1141 18.1873L14.2916 12.0013L8.10557 5.81527C7.69601 5.40572 7.69601 4.72312 8.1141 4.31357Z'
							fill='white'
						/>
					</svg>
				</Link>
				<Swiper
					className='container-right top-movies-wrapper'
					modules={[Pagination]}
					spaceBetween={15}
					slidesPerView={4.5}
					pagination={{ clickable: true }}
					breakpoints={{
						300: {
							slidesPerView: 1.6,
							spaceBetween: 5
						},
						400: {
							slidesPerView: 2.2,
							spaceBetween: 5
						},
						567: {
							slidesPerView: 2.5,
							spaceBetween: 10
						},
						767: {
							slidesPerView: 3.5,
							spaceBetween: 10
						},
						1100: {
							slidesPerView: 4.5,
							spaceBetween: 15
						}
					}}
				>
					{movies.map(item => {
						return (
							<SwiperSlide
								key={item.id}
								className='usual-movies-slide swiper-slide'
							>
								<Link to={`/movie/${item.id}`}>
									<img src={item.cardImg} alt={item.title} />
								</Link>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<div className='movies-pagination'></div>
			</div>
		</section>
	)
}

export default Slider
