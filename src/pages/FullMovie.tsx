import React from 'react'
import { useParams } from 'react-router-dom'
import { IMovie } from './Movies'
import axios from 'axios'
import MovieHeader from '../components/MovieHeader'
import Comments from '../components/Comments'
import Similiar from '../components/Similiar'
import Modal from '../components/Modal'

const FullMovie = () => {
	const [movie, setMovie] = React.useState<IMovie>()
	const [membersModal, setMembersModal] = React.useState(false)
	const [commentModal, setCommentModal] = React.useState(false)
	const params = useParams()

	React.useEffect(() => {
		const getMovie = async () => {
			try {
				const { data } = await axios.get<IMovie>(
					`https://64672b8aba7110b663b11c76.mockapi.io/Movies/${params.id}`
				)

				setMovie(data)
			} catch (error) {
				console.log(error)
			}
		}

		getMovie()
	}, [])

	const onChangeMembersModal = () => {
		setMembersModal(prev => !prev)
	}

	const openCommentModal = () => {
		setCommentModal(prev => !prev)
	}

	const onCloseModal = () => {
		setMembersModal(false)
		setCommentModal(false)
	}

	if (movie) {
		return (
			<>
				{membersModal && (
					<Modal onCloseModal={onCloseModal} title='Участники:'>
						{movie.members.map((item, index) => {
							return (
								<div className='acters__item' key={index}>
									<div className='acters__image'>
										<img src={item.image} alt={item.name} />
									</div>
									<div className='acters__name'>
										<h2>{item.name}</h2>
									</div>
									<div className='acters__role'>
										<span>{item.role}</span>
									</div>
								</div>
							)
						})}
					</Modal>
				)}
				<MovieHeader onOpenModal={onChangeMembersModal} {...movie} />
				{commentModal && (
					<Modal
						onCloseModal={onCloseModal}
						title='Поделитесь своим впечатлением!'
					>
						<form className='form'>
							<div className='input__item'>
								<label htmlFor='name'>Ваше имя</label>
								<input type='text' id='name' />
							</div>
							<div className='input__item'>
								<label htmlFor='message'>Сообщение</label>
								<textarea name='text' id='message'></textarea>
							</div>
						</form>
					</Modal>
				)}
				<Comments onOpenModal={openCommentModal} {...movie} />
				<Similiar />
			</>
		)
	}

	return <h1>Loading...</h1>
}

export default FullMovie
