import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectFavorites } from '../redux/favorites/selectors'
import { clearFavorites, removeFavorites } from '../redux/favorites/slice'

const Favorites = () => {
	const favorites = useSelector(selectFavorites)
	const dispatch = useDispatch()

	const onRemoveFavorites = (id: number) => {
		dispatch(removeFavorites(id))
	}

	const onClearFavorites = () => {
		dispatch(clearFavorites())
	}

	return (
		<section className='favorites'>
			<div className='container'>
				<div className='favorites__header'>
					<div className='favorites__title'>
						<h1>Избранное</h1>
					</div>
					<div className='favorites__remove-all'>
						<button onClick={onClearFavorites}>Удалить всё</button>
					</div>
				</div>
				<div className='favorites__wrapper'>
					{favorites.length >= 1 ? (
						favorites.map((item, index) => {
							return (
								<div key={item.id} className='favorites__item'>
									<Link to={`/movie/${item.id}`}>
										<div className='favorites__image'>
											<img src={item.cardImg} alt={item.title} />
										</div>
									</Link>
									<div
										onClick={() => onRemoveFavorites(item.id)}
										className='favorites__btn-remove'
									>
										<svg
											width='33'
											height='34'
											viewBox='0 0 33 34'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M33 16.6902C33 25.8799 25.6127 33.3297 16.5 33.3297C7.3873 33.3297 0 25.8799 0 16.6902C0 7.50051 7.3873 0.0507812 16.5 0.0507812C25.6127 0.0507812 33 7.50051 33 16.6902Z'
												fill='white'
											/>
											<path
												className='fav-svg'
												d='M22.9537 10.3274C22.5316 9.9053 21.8497 9.9053 21.4276 10.3274L16.1351 15.6091L10.8426 10.3166C10.4205 9.89447 9.73868 9.89447 9.31658 10.3166C8.89447 10.7387 8.89447 11.4205 9.31658 11.8426L14.6091 17.1351L9.31658 22.4276C8.89447 22.8497 8.89447 23.5316 9.31658 23.9537C9.73868 24.3758 10.4205 24.3758 10.8426 23.9537L16.1351 18.6612L21.4276 23.9537C21.8497 24.3758 22.5316 24.3758 22.9537 23.9537C23.3758 23.5316 23.3758 22.8497 22.9537 22.4276L17.6612 17.1351L22.9537 11.8426C23.365 11.4314 23.365 10.7387 22.9537 10.3274V10.3274Z'
												fill='#40464E'
											/>
										</svg>
									</div>
								</div>
							)
						})
					) : (
						<h2>Избранных фильмов не найдено :(</h2>
					)}
				</div>
			</div>
		</section>
	)
}

export default Favorites
