import React from 'react'

const MovieHeader: React.FC = () => {
	return (
		<article className='movie'>
			<div className='movie__container container'>
				<div className='movie__info'>
					<div className='movie__title'>
						<img src='./images/banner-logo.png' alt='Luca' />
					</div>
					<div className='movie__desc'>
						<p>
							La película de Disney y Pixar “Luca” está ambientada en un pueblo
							de la costa italiana y cuenta la historia de un adolescente que
							pasa un verano inolvidable lleno de aventuras junto con su nuevo
							amigo Alberto.
						</p>
					</div>
					<div className='movie__options'>
						<div className='movie__option movie__trailer'>
							<button className='content__btn-fill'>Смотреть трейлер</button>
						</div>
						<div className='movie__option movie__information'>
							<button className='content__btn-unfill'>узнать подробнее</button>
						</div>
					</div>
				</div>
			</div>
			<div className='movie__bg'>
				<img src='./images/header-bg.jpg' alt='Luca' />
			</div>
		</article>
	)
}

export default MovieHeader
