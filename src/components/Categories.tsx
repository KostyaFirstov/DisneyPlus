import React from 'react'

type CategoriesProps = {
	value: number
	onChangeCategory: (i: number) => void
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
	const categoriesList = [
		'Все',
		'Комедии',
		'Семейные',
		'Экшн',
		'Приключения',
		'Фантастика',
		'Документальные'
	]

	return (
		<div className='categories'>
			<ul className='categories__list'>
				{categoriesList.map((item, i) => {
					return (
						<li
							key={i}
							onClick={() => onChangeCategory(i)}
							className={`${value === i ? 'active' : ''} categories__item`}
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
