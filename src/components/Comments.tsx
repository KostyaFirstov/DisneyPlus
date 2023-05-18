import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Comments = () => {
	return (
		<section className='commentaries'>
			<div className='title container-right'>
				<h2>Отзывы</h2>
			</div>
			<Swiper
				className='container-right top-movies-wrapper'
				spaceBetween={15}
				slidesPerView={3.5}
				pagination={{ clickable: true }}
				grabCursor={true}
				freeMode={true}
			>
				<SwiperSlide>
					<div className='commentaries-slide swiper-slide commentaries__item commentaries__item-add'>
						<div className='commentaries__item-add-inner'>
							<h3>Есть что рассказать?</h3>
							<p>Пишите, нам интересно узнать ваше мнение</p>
							<svg
								width='72'
								height='72'
								viewBox='0 0 72 72'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M54 39H39V54C39 55.65 37.65 57 36 57C34.35 57 33 55.65 33 54V39H18C16.35 39 15 37.65 15 36C15 34.35 16.35 33 18 33H33V18C33 16.35 34.35 15 36 15C37.65 15 39 16.35 39 18V33H54C55.65 33 57 34.35 57 36C57 37.65 55.65 39 54 39Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='commentaries-slide swiper-slide commentaries__item'>
						<div className='commentaries__header'>
							<div className='commentaries__author'>
								<div className='author__image'>
									<img src='./images/acc.svg' alt='Person' />
								</div>
								<div className='author__name'>
									<h3>Daniel Craig</h3>
								</div>
							</div>
							<div className='commentaries__score'>
								<span>4.8</span>
							</div>
						</div>
						<div className='commentaries__main'>
							<div className='commentaries__text'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
									natus unde magni odit eveniet, soluta veritatis odio, itaque
									obcaecati dignissimos facilis libero nemo. Excepturi iusto
									possimus, autem aut veniam necessitatibus.
								</p>
							</div>
						</div>
						<div className='commentaries__options'>
							<div className='commentaries__option commentaries__option-rate'>
								<div className='rate-like'>
									<button>
										<svg
											width='26'
											height='26'
											viewBox='0 0 26 26'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M6.79671 10.6802V25M6.79671 10.6802L1 10.6802V25H6.79671M6.79671 10.6802L14.3261 2.00021C15.0405 1.17658 16.1645 0.822508 17.2296 1.08561L17.2985 1.10263C19.243 1.58299 20.1189 3.82183 19.0072 5.46973L15.4918 10.6802H22.1006C23.9296 10.6802 25.3014 12.3336 24.9427 14.1058L23.2037 22.6977C22.9327 24.0364 21.7432 25 20.3616 25H6.79671'
												stroke='white'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</button>
									<span>0</span>
								</div>
							</div>
							<div className='commentaries__option commentaries__option-date'>
								<span className='commentaries__time'>15:35</span> / 02.16.2023
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Comments
