import React from 'react'
import { setSearchValue } from '../redux/filterSlice'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

const Search = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [searchStatus, setSearchStatus] = React.useState(false)
	const [value, setValue] = React.useState('')

	const dispatch = useDispatch()

	const changeSearchStatus = () => {
		setSearchStatus(prev => !prev)

		if (!searchStatus) {
			setTimeout(() => {
				inputRef.current?.focus()
			}, 0)
		}
	}

	const sendSearchValue = React.useCallback(
		debounce(str => {
			dispatch(setSearchValue(str))
		}, 500),
		[]
	)

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		sendSearchValue(event.target.value)
	}

	const clearInput = () => {
		setValue('')
		dispatch(setSearchValue(''))
		inputRef.current?.focus()
	}

	return (
		<li
			className={`${
				searchStatus ? 'active' : ''
			} header__option header__option-search`}
		>
			<span
				className='header__option-search-inner'
				onClick={changeSearchStatus}
			>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.5773 12.2247C7.95533 14.066 4.312 13.8153 1.968 11.4713C-0.656 8.84733 -0.656 4.59267 1.968 1.968C4.59267 -0.656 8.848 -0.656 11.472 1.968C13.69 4.186 14.0333 7.56933 12.502 10.148L15.542 13.1867C15.6659 13.3105 15.7641 13.4575 15.8312 13.6193C15.8982 13.7811 15.9327 13.9545 15.9327 14.1297C15.9327 14.3048 15.8982 14.4782 15.8312 14.64C15.7641 14.8018 15.6659 14.9488 15.542 15.0727L15.426 15.188C15.176 15.438 14.8369 15.5784 14.4833 15.5784C14.1298 15.5784 13.7907 15.438 13.5407 15.188L10.5773 12.2247ZM6.72 11.318C7.93947 11.318 9.10899 10.8336 9.97128 9.97128C10.8336 9.10898 11.318 7.93947 11.318 6.72C11.318 5.50053 10.8336 4.33102 9.97128 3.46872C9.10899 2.60643 7.93947 2.122 6.72 2.122C5.50054 2.122 4.33102 2.60643 3.46872 3.46872C2.60643 4.33102 2.122 5.50053 2.122 6.72C2.122 7.93947 2.60643 9.10898 3.46872 9.97128C4.33102 10.8336 5.50054 11.318 6.72 11.318V11.318Z'
						fill='white'
					/>
				</svg>
				Поиск
			</span>
			{searchStatus && (
				<div className='full-search'>
					<input
						ref={inputRef}
						value={value}
						onChange={onChangeInput}
						className='search__input'
						type='text'
					/>
					{value.length > 0 && (
						<div onClick={clearInput} className='search__clear'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M15.6451 0.367084C15.1718 -0.106181 14.4073 -0.106181 13.934 0.367084L8 6.28897L2.06598 0.354949C1.59272 -0.118316 0.828214 -0.118316 0.354949 0.354949C-0.118316 0.828214 -0.118316 1.59272 0.354949 2.06598L6.28897 8L0.354949 13.934C-0.118316 14.4073 -0.118316 15.1718 0.354949 15.6451C0.828214 16.1183 1.59272 16.1183 2.06598 15.6451L8 9.71104L13.934 15.6451C14.4073 16.1183 15.1718 16.1183 15.6451 15.6451C16.1183 15.1718 16.1183 14.4073 15.6451 13.934L9.71104 8L15.6451 2.06598C16.1062 1.60485 16.1062 0.828214 15.6451 0.367084V0.367084Z'
									fill='white'
								/>
							</svg>
						</div>
					)}
				</div>
			)}
		</li>
	)
}

export default Search
