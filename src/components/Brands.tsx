import React from 'react'

const Brands = () => {
	return (
		<section className='brands'>
			<div className='brands__container container'>
				<div className='brands__item'>
					<img src='./images/banner-disney.svg' alt='' />
					<video muted={true} autoPlay={true} loop={true}>
						<source src='./videos/1564674844-disney.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='brands__item'>
					<img src='./images/banner-pixar.svg' alt='' />
					<video muted={true} autoPlay={true} loop={true}>
						<source src='./videos/1564676714-pixar.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='brands__item'>
					<img src='./images/banner-marvel.svg' alt='' />
					<video muted={true} autoPlay={true} loop={true}>
						<source src='./videos/1564676115-marvel.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='brands__item'>
					<img src='./images/banner-starwars.svg' alt='' />
					<video muted={true} autoPlay={true} loop={true}>
						<source src='./videos/1608229455-star-wars.mp4' type='video/mp4' />
					</video>
				</div>
				<div className='brands__item'>
					<img src='./images/banner-ng.svg' alt='' />
					<video muted={true} autoPlay={true} loop={true}>
						<source
							src='./videos/1564676296-national-geographic.mp4'
							type='video/mp4'
						/>
					</video>
				</div>
			</div>
		</section>
	)
}

export default Brands
