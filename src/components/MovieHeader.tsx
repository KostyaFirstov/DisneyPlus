import React from 'react'

export type MovieHeaderProps = {
	id: number
	backgroundImg: string
	cardImg: string
	description: string
	duration: string
	title: string
	titleImg: string
	type: string
	year: string
	age: string
	rating: string
	genres: string[]
	members: { name: string; image: string; role: string }[]
	popularity: string
	comments: {
		name: string
		text: string
		date: string
		rating: string
		likes: string
	}[]
	onOpenModal: () => any
}

const MovieHeader: React.FC<MovieHeaderProps> = ({
	backgroundImg,
	description,
	duration,
	title,
	titleImg,
	year,
	age,
	rating,
	genres,
	onOpenModal
}) => {
	return (
		<article className='movie'>
			<div className='movie__container container'>
				<div className='movie__info'>
					<div className='movie__title'>
						<img src={titleImg} alt={title} />
					</div>
					<div className='movie__parameters'>
						<div className='movie__parameter'>{age}+</div>
						<div className='movie__parameter'>{year}</div>
						<div className='movie__parameter'>{duration}</div>
						<div className='movie__parameter movie__parameter-rating'>
							{rating}
						</div>
					</div>
					<div className='movie__options'>
						<div className='movie__option movie__trailer'>
							<button className='content__btn-fill'>Смотреть фильм</button>
						</div>
						<div className='movie__option movie__information'>
							<button className='content__btn-unfill'>Смотреть трейлер</button>
						</div>
						<div
							onClick={onOpenModal}
							className='movie__option movie__option-creaters'
						>
							<button>
								<svg
									width='48'
									height='48'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='47'
										height='47'
										rx='23.5'
										fill='black'
										fillOpacity='0.1'
									/>
									<path
										d='M28.9421 25.4433C28.9701 25.5797 29.3988 30.0141 29.2433 30.8713C29.019 32.1135 27.4698 33 24.1518 33C20.9559 33 19.3236 31.9322 19.0107 30.6598C18.7113 29.4504 19.3037 25.3648 19.3326 25.2318C20.0552 21.8437 22.9608 21.665 23.9646 21.6581H24.2766C25.2144 21.6581 28.2015 21.9835 28.9421 25.4433ZM17.0483 22.5455C17.3431 22.5455 17.8622 22.5601 18.4211 22.744C18.0458 23.3638 17.7645 24.0742 17.5927 24.877C17.5845 24.9159 16.8656 29.377 17.2816 31.0664C17.2843 31.0767 17.2915 31.0836 17.2943 31.094C17.0347 31.0741 16.7652 31.037 16.484 30.9688C13.9871 30.3715 13.0393 29.1923 13.0059 28.5414C12.9552 27.5401 13.2473 25.5279 13.2709 25.42C13.8641 22.6361 16.0915 22.5455 16.8457 22.5455H17.0483ZM31.2129 22.5455C32.015 22.5506 34.1493 22.7034 34.729 25.42C34.7525 25.5279 35.0455 27.5401 34.9939 28.5414C34.9623 29.1923 34.0136 30.3715 31.5168 30.9697C31.3422 31.0103 31.1731 31.0422 31.0076 31.0646C31.1849 29.7215 30.7164 25.2594 30.6802 25.0894C30.4804 24.1519 30.1385 23.3629 29.7018 22.706C30.2127 22.5593 30.6793 22.5455 30.9524 22.5455H31.2129ZM31.0266 17.19C32.3225 17.19 33.3743 18.2172 33.3743 19.4853C33.3743 20.7525 32.3225 21.7806 31.0266 21.7806C29.7298 21.7806 28.6762 20.7525 28.6762 19.4853C28.6762 18.2172 29.7298 17.19 31.0266 17.19ZM16.9741 17.19C18.2718 17.19 19.3236 18.2172 19.3236 19.4853C19.3236 20.7525 18.2718 21.7806 16.9741 21.7806C15.6782 21.7806 14.6274 20.7525 14.6274 19.4853C14.6274 18.2172 15.6782 17.19 16.9741 17.19ZM24.1871 15C25.7995 15 27.1072 16.2767 27.1072 17.8521C27.1072 19.4284 25.7995 20.7059 24.1871 20.7059C22.5729 20.7059 21.2652 19.4284 21.2652 17.8521C21.2652 16.2767 22.5729 15 24.1871 15Z'
										fill='white'
									/>
									<rect
										x='0.5'
										y='0.5'
										width='47'
										height='47'
										rx='23.5'
										stroke='white'
									/>
								</svg>
							</button>
						</div>
						<div className='movie__option movie__option-favorite'>
							<button>
								<svg
									width='48'
									height='48'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='47'
										height='47'
										rx='23.5'
										fill='black'
										fillOpacity='0.1'
									/>
									<path
										d='M30 25H25V30C25 30.55 24.55 31 24 31C23.45 31 23 30.55 23 30V25H18C17.45 25 17 24.55 17 24C17 23.45 17.45 23 18 23H23V18C23 17.45 23.45 17 24 17C24.55 17 25 17.45 25 18V23H30C30.55 23 31 23.45 31 24C31 24.55 30.55 25 30 25Z'
										fill='white'
									/>
									<rect
										x='0.5'
										y='0.5'
										width='47'
										height='47'
										rx='23.5'
										stroke='white'
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className='movie__desc'>
						<p>{description}</p>
					</div>
					<div className='movie__genres'>
						{genres.map((item, index) => {
							return (
								<div key={index} className='movie__genre'>
									{item}
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className='movie__bg'>
				<img src={backgroundImg} alt={title} />
			</div>
		</article>
	)
}

export default MovieHeader
