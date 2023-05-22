import { type } from 'os'
import React from 'react'
import { selectSort, setSortValue } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

export const sortList = [
	{ name: 'Популярности DESC', sortValue: 'popularity' },
	{ name: 'Популярности ASC', sortValue: '-popularity' },
	{ name: 'Рейтингу DESC', sortValue: 'rating' },
	{ name: 'Рейтингу ASC', sortValue: '-rating' },
	{ name: 'Дате выхода DESC', sortValue: 'year' },
	{ name: 'Дате выхода ASC', sortValue: '-year' },
	{ name: 'Возрасту DESC', sortValue: 'age' },
	{ name: 'Возрасту ASC', sortValue: '-age' }
]

const Sort: React.FC = () => {
	const [open, setOpen] = React.useState(false)
	const { sortValue, name } = useSelector(selectSort)
	const dispatch = useDispatch()

	const changeModal = () => {
		setOpen(prev => !prev)
	}

	const changeSortValue = (item: number) => {
		dispatch(setSortValue(sortList[item]))
		setOpen(false)
	}

	return (
		<div className='movies__sort'>
			<div className='sort__title'>
				<svg
					width='12'
					height='8'
					viewBox='0 0 12 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.87998 1.29055L5.99998 5.17055L2.11998 1.29055C1.72998 0.900547 1.09998 0.900547 0.70998 1.29055C0.31998 1.68055 0.31998 2.31055 0.70998 2.70055L5.29998 7.29055C5.68998 7.68055 6.31998 7.68055 6.70998 7.29055L11.3 2.70055C11.69 2.31055 11.69 1.68055 11.3 1.29055C10.91 0.910547 10.27 0.900547 9.87998 1.29055Z'
						fill='white'
					/>
				</svg>
				Сортировка по:
			</div>
			<div className='sort__list'>
				<span onClick={changeModal} className='sort__item-active'>
					{name}
				</span>
				{open && (
					<ul className='sort__modal'>
						{sortList.map((item, index) => {
							return (
								<li
									onClick={() => changeSortValue(index)}
									key={index}
									className={`${name === item.name ? 'active' : ''} sort__item`}
								>
									{item.name}
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Sort
