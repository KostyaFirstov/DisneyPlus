import React, { ChangeEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites } from '../redux/favoritesSlice'
import Menu from './Menu'
import { selectMenuStatus, setMenuStatus } from '../redux/menuSlice'

export const headerLinks = [
	{
		image: (
			<svg
				width='20'
				height='17'
				viewBox='0 0 20 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.0001 16.0007V11.0007H12.0001V16.0007C12.0001 16.5507 12.4501 17.0007 13.0001 17.0007H16.0001C16.5501 17.0007 17.0001 16.5507 17.0001 16.0007V9.0007H18.7001C19.1601 9.0007 19.3801 8.4307 19.0301 8.1307L10.6701 0.600703C10.2901 0.260703 9.7101 0.260703 9.3301 0.600703L0.970098 8.1307C0.630098 8.4307 0.840098 9.0007 1.3001 9.0007H3.0001V16.0007C3.0001 16.5507 3.4501 17.0007 4.0001 17.0007H7.0001C7.5501 17.0007 8.0001 16.5507 8.0001 16.0007Z'
					fill='white'
				/>
			</svg>
		),
		link: '/',
		text: 'Главная'
	},
	{
		image: (
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.56 3.97662H13.0413C13.7486 3.97662 14.4269 4.25757 14.927 4.75767C15.427 5.25777 15.708 5.93605 15.708 6.64329V13.3333C15.708 14.0405 15.427 14.7188 14.927 15.2189C14.4269 15.719 13.7486 16 13.0413 16H2.91667C2.20942 16 1.53115 15.719 1.03105 15.2189C0.530951 14.7188 0.25 14.0405 0.25 13.3333V6.64329C0.25 5.93605 0.530951 5.25777 1.03105 4.75767C1.53115 4.25757 2.20942 3.97662 2.91667 3.97662H7.05733L4.40333 1.32262C4.33137 1.2507 4.27428 1.16531 4.23531 1.07133C4.19635 0.97734 4.17628 0.876601 4.17625 0.774859C4.17622 0.673116 4.19622 0.572365 4.23513 0.478355C4.27404 0.384346 4.33108 0.29892 4.403 0.226956C4.47492 0.154992 4.56031 0.0978978 4.6543 0.0589342C4.74828 0.0199706 4.84902 -9.9702e-05 4.95076 -0.000130653C5.05251 -0.000161605 5.15326 0.0198476 5.24727 0.058754C5.34128 0.0976604 5.4267 0.154702 5.49867 0.226623L7.80867 2.53662L10.118 0.226623C10.2633 0.0812843 10.4605 -0.000366216 10.666 -0.000366211C10.8715 -0.000366206 11.0687 0.0812843 11.214 0.226623C11.3593 0.371962 11.441 0.569083 11.441 0.774623C11.441 0.980163 11.3593 1.17728 11.214 1.32262L8.55933 3.97662H8.56ZM12.8453 9.12996C13.1491 9.12996 13.4404 9.00929 13.6552 8.7945C13.87 8.5797 13.9907 8.28838 13.9907 7.98462C13.9907 7.68086 13.87 7.38954 13.6552 7.17475C13.4404 6.95996 13.1491 6.83929 12.8453 6.83929C12.5416 6.83929 12.2503 6.95996 12.0355 7.17475C11.8207 7.38954 11.7 7.68086 11.7 7.98462C11.7 8.28838 11.8207 8.5797 12.0355 8.7945C12.2503 9.00929 12.5416 9.12996 12.8453 9.12996V9.12996ZM12.8453 13.1373C12.998 13.141 13.1499 13.1141 13.292 13.0582C13.4342 13.0023 13.5637 12.9186 13.673 12.8119C13.7823 12.7052 13.8692 12.5777 13.9285 12.437C13.9878 12.2962 14.0183 12.145 14.0183 11.9923C14.0183 11.8396 13.9878 11.6884 13.9285 11.5476C13.8692 11.4069 13.7823 11.2794 13.673 11.1727C13.5637 11.066 13.4342 10.9823 13.292 10.9264C13.1499 10.8705 12.998 10.8436 12.8453 10.8473C12.5464 10.8545 12.2622 10.9783 12.0534 11.1922C11.8445 11.4062 11.7276 11.6933 11.7276 11.9923C11.7276 12.2913 11.8445 12.5784 12.0534 12.7923C12.2622 13.0063 12.5464 13.1301 12.8453 13.1373V13.1373Z'
					fill='white'
				/>
			</svg>
		),
		link: '/movies',
		text: 'Фильмы'
	},
	{
		image: (
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M7.75 13.352L2.96 16L3.87533 10.392L0 6.42067L5.35533 5.602L7.75 0.5L10.1447 5.602L15.5 6.42067L11.6247 10.392L12.54 16L7.75 13.352Z'
					fill='white'
				/>
			</svg>
		),
		link: '/top',
		text: 'Лучшее в мире'
	}
]

const Header: React.FC = () => {
	const location = useLocation()
	const favorites = useSelector(selectFavorites)
	const status = useSelector(selectMenuStatus)
	const isMounted = React.useRef(false)

	const dispatch = useDispatch()

	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(favorites)
			localStorage.setItem('movies', json)
		}

		isMounted.current = true
	}, [favorites])

	const openMenu = () => {
		dispatch(setMenuStatus(true))
	}

	return (
		<>
			<div className='header'>
				<div className='header__container container'>
					<div className='header__main'>
						<div className='logo'>
							<Link to={'/'}>
								<img src='/images/logo.svg' alt='DisneyPlus+' />
							</Link>
						</div>
						<ul className='header__links'>
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
						</ul>
					</div>
					<ul className='header__options'>
						{location.pathname === '/movies' && <Search />}
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
						<li
							onClick={openMenu}
							className='header__option header__option-menu'
						>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M15.5667 7.06667H10.9333V2.43333C10.9333 1.92058 10.7296 1.42883 10.3671 1.06626C10.0045 0.70369 9.51275 0.5 9 0.5C8.48725 0.5 7.9955 0.70369 7.63293 1.06626C7.27036 1.42883 7.06667 1.92058 7.06667 2.43333V7.06667H2.43333C1.92058 7.06667 1.42883 7.27036 1.06626 7.63293C0.70369 7.9955 0.5 8.48725 0.5 9C0.5 9.51275 0.70369 10.0045 1.06626 10.3671C1.42883 10.7296 1.92058 10.9333 2.43333 10.9333H7.06667V15.5667C7.06667 16.0794 7.27036 16.5712 7.63293 16.9337C7.9955 17.2963 8.48725 17.5 9 17.5C9.51275 17.5 10.0045 17.2963 10.3671 16.9337C10.7296 16.5712 10.9333 16.0794 10.9333 15.5667V10.9333H15.5667C16.0794 10.9333 16.5712 10.7296 16.9337 10.3671C17.2963 10.0045 17.5 9.51275 17.5 9C17.5 8.48725 17.2963 7.9955 16.9337 7.63293C16.5712 7.27036 16.0794 7.06667 15.5667 7.06667V7.06667Z'
									fill='white'
								/>
							</svg>
							<span>Меню</span>
						</li>
						<li className='header__option header__option-account'>
							<img src='/images/acc.svg' alt='Account' />
						</li>
					</ul>
				</div>
			</div>
			{status && <Menu />}
		</>
	)
}

export default Header
