import React from 'react'
import { selectCategory, setCategoryValue } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Categories: React.FC = () => {
	const categoriesList = [
		'Все',
		'Комедии',
		'Семейные',
		'Экшн',
		'Приключения',
		'Фантастика',
		'Документальные'
	]
	const categoryValue = useSelector(selectCategory)
	const dispatch = useDispatch()

	const changeCategory = (i: number) => {
		dispatch(setCategoryValue(i))
	}

	return (
		<div className='categories'>
			<ul className='categories__list'>
				{categoriesList.map((item, i) => {
					return (
						<li
							key={i}
							onClick={() => changeCategory(i)}
							className={`${
								categoryValue === i ? 'active' : ''
							} categories__item`}
						>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories
