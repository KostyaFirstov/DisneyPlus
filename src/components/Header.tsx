import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './Menu'
import { selectFavorites } from '../redux/favorites/selectors'
import { selectMenuStatus } from '../redux/menu/selectors'
import { setMenuStatus } from '../redux/menu/slice'

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
		text: 'Самое популярное'
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
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='145'
									height='84'
									viewBox='0 0 145 84'
									fill='none'
								>
									<path
										d='M100.309 52.463C98.4447 52.8706 93.538 53.1053 93.538 53.1053L92.9166 54.9583C92.9166 54.9583 95.3635 54.7606 97.1501 54.9336C97.1501 54.9336 97.7327 54.8718 97.7974 55.5636C97.8233 56.2059 97.7456 56.8977 97.7456 56.8977C97.7456 56.8977 97.7068 57.3177 97.0853 57.4165C96.4121 57.5277 91.8032 57.6883 91.8032 57.6883L91.0523 60.0971C91.0523 60.0971 90.7804 60.653 91.4019 60.4924C91.9844 60.3442 96.8135 59.4794 97.4478 59.603C98.121 59.7636 98.8719 60.6159 98.6519 61.4065C98.3929 62.37 93.5769 65.31 90.638 65.1C90.638 65.1 89.0974 65.1989 87.7898 63.21C86.5728 61.32 88.2559 57.7253 88.2559 57.7253C88.2559 57.7253 87.492 56.0453 88.0487 55.4894C88.0487 55.4894 88.3853 55.2053 89.3434 55.1312L90.5215 52.7965C90.5215 52.7965 89.1751 52.883 88.3724 51.9442C87.6215 51.0424 87.5697 50.6347 88.1394 50.3877C88.7478 50.1036 94.3536 49.1277 98.2117 49.2512C98.2117 49.2512 99.5581 49.1277 100.71 51.3512C100.697 51.3512 101.267 52.253 100.309 52.463ZM85.796 61.4312C85.3041 62.543 83.9965 63.7289 82.3782 62.9877C80.7728 62.2465 78.2224 57.2683 78.2224 57.2683C78.2224 57.2683 77.2514 55.4153 77.0702 55.4524C77.0702 55.4524 76.863 55.0942 76.7336 57.12C76.6041 59.1459 76.7594 63.0865 75.9179 63.7041C75.1153 64.3218 74.1443 64.0747 73.6394 63.3459C73.1862 62.6294 72.992 60.9247 73.238 57.9353C73.5358 54.9459 74.2608 51.7589 75.1929 50.7583C76.1251 49.77 76.876 50.4865 77.1608 50.7459C77.1608 50.7459 78.4036 51.8206 80.4621 54.983L80.8246 55.5636C80.8246 55.5636 82.6889 58.553 82.8831 58.5406C82.8831 58.5406 83.0385 58.6765 83.1679 58.5777C83.3621 58.5283 83.2845 57.5647 83.2845 57.5647C83.2845 57.5647 82.896 54.3159 81.2001 48.8065C81.2001 48.8065 80.9411 48.1147 81.1224 47.4724C81.2907 46.8177 81.9768 47.1265 81.9768 47.1265C81.9768 47.1265 84.6179 48.3865 85.8867 52.4877C87.1425 56.6259 86.288 60.3194 85.796 61.4312ZM72.8237 50.8942C72.6036 51.3142 72.4742 51.9194 71.3608 52.08C71.3608 52.08 60.7059 52.7718 60.201 53.4883C60.201 53.4883 59.8255 53.9083 60.4081 54.0318C60.9907 54.143 63.3987 54.4518 64.5639 54.5136C65.8068 54.5259 70.0014 54.563 71.5032 56.3542C71.5032 56.3542 72.3965 57.2065 72.3577 59.1336C72.3188 61.11 71.9563 61.8018 71.1536 62.5183C70.3121 63.1853 63.088 66.2736 58.4273 61.53C58.4273 61.53 56.2782 59.2447 59.1652 57.5153C59.1652 57.5153 61.2496 56.3171 66.5447 57.7253C66.5447 57.7253 68.1501 58.2812 68.0724 58.8371C67.9818 59.43 66.7519 60.06 64.9652 60.023C63.2304 59.9736 61.9617 59.183 62.2077 59.3065C62.4407 59.393 60.3434 58.343 59.696 59.0594C59.0487 59.7141 59.2041 60.1218 59.8385 60.5294C61.4568 61.4065 67.7099 61.0977 69.5742 59.1212C69.5742 59.1212 70.3121 58.3183 69.1858 57.6636C68.0594 57.0459 64.8358 56.6753 63.58 56.6136C62.376 56.5518 57.8965 56.6259 57.2492 55.4894C57.2492 55.4894 56.6019 54.7236 57.3139 52.5494C58.0648 50.2765 63.2822 49.3994 65.5349 49.2018C65.5349 49.2018 71.7362 48.9918 72.8755 50.2024C72.8626 50.2024 73.0179 50.4865 72.8237 50.8942ZM55.2166 64.223C54.4657 64.7542 52.8733 64.5194 52.4202 63.9265C51.967 63.3953 51.8117 61.283 51.9023 57.9724C51.9929 54.6247 52.0706 50.4741 52.8215 49.8194C53.6242 49.1524 54.1161 49.733 54.4269 50.19C54.7635 50.6347 55.1648 51.1289 55.2554 52.1789C55.3331 53.2289 55.592 58.7383 55.592 58.7383C55.592 58.7383 55.9286 63.7042 55.2166 64.223ZM56.8349 46.4594C54.6469 47.1512 53.1452 46.9165 51.8764 46.3977C51.3197 47.3241 50.996 47.6083 50.5688 47.67C49.9474 47.7318 49.3907 46.7806 49.2871 46.4718C49.1836 46.2371 48.8858 45.8418 49.2483 44.903C48.0054 43.8406 47.9148 42.4077 48.1219 41.4442C48.4327 40.3324 50.53 36.1077 56.9126 35.6136C56.9126 35.6136 60.0327 35.3912 60.5635 36.9847H60.6541C60.6541 36.9847 63.6836 36.9971 63.6188 39.5665C63.58 42.1483 60.2527 45.36 56.8349 46.4594ZM50.8795 40.74C50.2322 41.7283 50.2063 42.3212 50.5041 42.7289C51.242 41.6542 52.5885 39.9618 54.5693 38.6771C53.0416 38.8006 51.7599 39.4306 50.8795 40.74ZM59.696 39.0847C57.6894 39.3689 54.5822 41.9383 53.1063 44.0383C55.3719 44.4336 59.3724 44.2853 61.1461 40.8389C61.1331 40.8389 61.9876 38.7018 59.696 39.0847ZM114.175 58.9853C112.971 60.9865 109.592 65.1618 105.086 64.1859C103.597 67.6324 102.355 71.1036 101.642 76.3165C101.642 76.3165 101.487 77.3294 100.607 76.9712C99.7394 76.6747 98.2894 75.2912 98.0045 73.3765C97.6938 70.8565 98.8719 66.5947 101.267 61.7153C100.568 60.6283 100.089 59.0718 100.503 56.8606C100.503 56.8606 101.112 52.7594 105.423 49.0536C105.423 49.0536 105.941 48.6212 106.238 48.7571C106.575 48.893 106.42 50.2271 106.148 50.8694C105.876 51.5118 103.947 54.6989 103.947 54.6989C103.947 54.6989 102.743 56.8483 103.08 58.5406C105.345 55.2177 110.498 48.51 113.696 50.6224C114.77 51.3512 115.262 52.9447 115.262 54.6618C115.249 56.1812 114.874 57.7871 114.175 58.9853ZM113.242 53.723C113.242 53.723 113.061 52.4012 111.715 53.8589C110.55 55.0818 108.452 57.3918 106.756 60.5171C108.53 60.3318 110.239 59.4053 110.757 58.9359C111.598 58.2194 113.553 56.2924 113.242 53.723ZM50.3876 55.403C50.1416 58.3924 48.9376 63.42 40.4059 65.903C34.7742 67.5212 29.4532 66.743 26.5532 66.0389C26.4885 67.1383 26.359 67.6077 26.1778 67.793C25.9318 68.0277 24.0934 69.0406 23.0836 67.6077C22.6304 66.9283 22.3974 65.693 22.2679 64.5936C15.7429 61.7277 12.7394 57.6018 12.6228 57.4165C12.4804 57.2806 10.9916 55.7983 12.4804 53.9824C13.8786 52.3394 18.4487 50.6965 22.5657 50.0294C22.7081 46.6694 23.1224 44.1371 23.6144 42.9759C24.2099 41.6295 24.9608 42.84 25.6081 43.7542C26.1519 44.4336 26.4755 47.3612 26.5014 49.6959C29.1943 49.5724 30.7867 49.7577 33.7903 50.2765C37.7001 50.9559 40.3152 52.8583 40.0822 55.02C39.9139 57.1447 37.8684 58.0218 37.0916 58.0836C36.276 58.1453 35.0072 57.5894 35.0072 57.5894C34.1398 57.1942 34.9425 56.8483 35.9911 56.4159C37.1304 55.8847 36.8715 55.3412 36.8715 55.3412C36.4443 54.1553 31.3693 53.3277 26.3202 53.3277C26.2943 55.9836 26.4367 60.3936 26.5014 62.963C30.0358 63.6053 32.6769 63.4818 32.6769 63.4818C32.6769 63.4818 45.5715 63.1359 45.9599 55.2794C46.3612 47.4106 33.1041 39.863 23.3036 37.4665C13.5161 35.0206 7.97507 36.7253 7.49605 36.96C6.9782 37.2071 7.45722 37.2812 7.45722 37.2812C7.45722 37.2812 7.98802 37.3553 8.90721 37.6518C9.8782 37.9483 9.1273 38.43 9.1273 38.43C7.45722 38.9365 5.57998 38.6153 5.21748 37.8865C4.85498 37.1577 5.46347 36.503 6.16257 35.5642C6.86168 34.5759 7.62552 34.613 7.62552 34.613C19.7304 30.6106 34.4764 37.8494 34.4764 37.8494C48.2902 44.5324 50.6465 52.3642 50.3876 55.403ZM13.8528 54.9953C12.4804 55.6377 13.4255 56.5642 13.4255 56.5642C16.0019 59.2077 19.1737 60.863 22.1903 61.8883C22.5398 57.33 22.488 55.7241 22.5269 53.4265C17.8144 53.7353 15.0956 54.4518 13.8528 54.9953Z'
										fill='white'
									/>
									<path
										d='M139.809 54.0564V55.6869C139.809 56.0452 139.511 56.3293 139.135 56.3293H130.992C130.992 56.7369 131.005 57.0952 131.005 57.4287C131.005 59.8375 130.902 61.8017 130.656 64.0128C130.617 64.3464 130.332 64.5934 129.995 64.5934H128.235C128.053 64.5934 127.885 64.5193 127.769 64.3958C127.652 64.2722 127.587 64.0993 127.613 63.9264C127.859 61.7275 127.976 59.7881 127.976 57.4287C127.976 57.0828 127.976 56.7246 127.963 56.3293H119.91C119.535 56.3293 119.237 56.0452 119.237 55.6869V54.0564C119.237 53.6981 119.535 53.414 119.91 53.414H127.846C127.678 50.7581 127.341 48.2011 126.798 45.607C126.772 45.4464 126.81 45.2858 126.914 45.1622C127.018 45.0387 127.173 44.9646 127.341 44.9646H129.244C129.542 44.9646 129.788 45.1622 129.853 45.4464C130.384 48.127 130.72 50.7334 130.889 53.414H139.135C139.498 53.414 139.809 53.7105 139.809 54.0564Z'
										fill='white'
									/>
									<path
										className='logo-line'
										d='M128.727 41.123C124.519 31.253 117.411 22.8406 108.168 16.7877C98.7037 10.5988 87.6087 7.32532 76.0863 7.32532C57.0292 7.32532 39.3444 16.3553 28.793 31.4877C28.6765 31.6483 28.6506 31.8583 28.7153 32.0436C28.7801 32.2412 28.9354 32.3771 29.1296 32.4388L30.6055 32.9206C30.6961 32.9453 30.7868 32.9577 30.8645 32.9577C31.1363 32.9577 31.3953 32.8218 31.5506 32.6118C36.3926 25.8177 42.9435 20.1724 50.5042 16.2688C58.3109 12.2418 67.1533 10.1047 76.0734 10.1047C86.8578 10.1047 97.2537 13.1436 106.161 18.8753C114.848 24.4712 121.593 32.2906 125.671 41.4688C125.788 41.7406 126.072 41.9259 126.383 41.9259H128.144C128.351 41.9259 128.545 41.8271 128.649 41.6665C128.778 41.5059 128.804 41.3083 128.727 41.123ZM30.8645 32.5377C30.8256 32.5377 30.7868 32.5253 30.7479 32.513C30.7868 32.5253 30.8256 32.5377 30.8645 32.5377C30.8774 32.5377 30.8903 32.5377 30.8903 32.5377C30.8903 32.5377 30.8774 32.5377 30.8645 32.5377ZM126.021 41.7036C126.06 41.7283 126.098 41.753 126.137 41.7653C126.098 41.7406 126.06 41.7283 126.021 41.7036Z'
										fill='url(#paint0_radial_2721_4096)'
									/>
									<defs>
										<radialGradient
											id='paint0_radial_2721_4096'
											cx='0'
											cy='0'
											r='1'
											gradientUnits='userSpaceOnUse'
											gradientTransform='translate(127.072 41.8637) scale(98.409 93.8977)'
										>
											<stop offset='0.00708621' stopColor='white' />
											<stop offset='0.0300991' stopColor='#CBFFFF' />
											<stop offset='0.0570069' stopColor='#96FFFF' />
											<stop offset='0.0842769' stopColor='#68FFFF' />
											<stop offset='0.1113' stopColor='#43FFFF' />
											<stop offset='0.1382' stopColor='#25FFFF' />
											<stop offset='0.1647' stopColor='#11FFFF' />
											<stop offset='0.1908' stopColor='#04FFFF' />
											<stop offset='0.2159' stopColor='#00FFFF' />
											<stop offset='1' stopColor='#0000FF' stopOpacity='0' />
										</radialGradient>
									</defs>
								</svg>
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
						<li
							className={`${
								location.pathname === '/favorites' ? 'active' : ''
							} header__option header__option-favorites`}
						>
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
								<span>Мой топ</span>
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
					</ul>
				</div>
			</div>
			{status && <Menu />}
		</>
	)
}

export default Header
