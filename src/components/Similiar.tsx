import React from 'react'

type SimiliarProps = {
	id: number
}

const Similiar: React.FC<SimiliarProps> = ({ id }) => {
	return (
		<section className='similaries'>
			<div className='container'>
				<div className='title'>
					<h2>Смотрите также</h2>
				</div>
				<div className='similaries__wrapper'>
					{/* {similars.map((item, index) => {
						return (
							<div key={index} className='similaries__item'>
								<Link to={`/movie/${item.id}`}>
									<img src={item.cardImg} alt={item.title} />
								</Link>
							</div>
						)
					})} */}
				</div>
			</div>
		</section>
	)
}

export default Similiar
