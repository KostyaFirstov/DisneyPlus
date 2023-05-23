import React from 'react'
import { headerLinks } from './Header'
import { Link, useLocation } from 'react-router-dom'
import { selectFavorites } from '../redux/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuStatus } from '../redux/menuSlice'

const Menu = () => {
	const location = useLocation()
	const favorites = useSelector(selectFavorites)
	const sortRef = React.useRef<HTMLUListElement>(null)
	const dispatch = useDispatch()

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (sortRef.current && _event.includes(sortRef.current)) {
				dispatch(setMenuStatus(false))
			}
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const onCloseMenu = () => {
		dispatch(setMenuStatus(false))
	}

	return (
		<div className='menu'>
			<ul ref={sortRef} className='menu__links'>
				{headerLinks.map((item, index) => {
					return (
						<li
							key={index}
							className={`header__link ${
								item.link === location.pathname ? 'active' : ''
							}`}
						>
							<Link to={item.link}>
								{item.image}
								<span>{item.text}</span>
							</Link>
						</li>
					)
				})}
				<li className='header__option header__option-favorites'>
					<Link to='/favorites'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.8 7.2C4.36 7.2 4 7.56 4 8V18.4C4 19.28 4.72 20 5.6 20H16C16.44 20 16.8 19.64 16.8 19.2C16.8 18.76 16.44 18.4 16 18.4H6.4C5.96 18.4 5.6 18.04 5.6 17.6V8C5.6 7.56 5.24 7.2 4.8 7.2ZM18.4 4H8.8C7.92 4 7.2 4.72 7.2 5.6V15.2C7.2 16.08 7.92 16.8 8.8 16.8H18.4C19.28 16.8 20 16.08 20 15.2V5.6C20 4.72 19.28 4 18.4 4ZM12 14V6.8L16.376 10.08C16.592 10.24 16.592 10.56 16.376 10.72L12 14Z'
								fill='white'
							/>
						</svg>
						<span>Мой топ </span>
						<div className='favorites__count'>{favorites.length}</div>
					</Link>
				</li>
			</ul>
			<div onClick={onCloseMenu} className='menu__btn-close'>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M19.5563 0.458855C18.9647 -0.132726 18.0091 -0.132726 17.4175 0.458855L10 7.86121L2.58248 0.443686C1.9909 -0.147895 1.03527 -0.147895 0.443686 0.443686C-0.147895 1.03527 -0.147895 1.9909 0.443686 2.58248L7.86121 10L0.443686 17.4175C-0.147895 18.0091 -0.147895 18.9647 0.443686 19.5563C1.03527 20.1479 1.9909 20.1479 2.58248 19.5563L10 12.1388L17.4175 19.5563C18.0091 20.1479 18.9647 20.1479 19.5563 19.5563C20.1479 18.9647 20.1479 18.0091 19.5563 17.4175L12.1388 10L19.5563 2.58248C20.1327 2.00607 20.1327 1.03527 19.5563 0.458855V0.458855Z'
						fill='white'
					/>
				</svg>
			</div>
		</div>
	)
}

export default Menu
