import React from 'react'
import { useParams } from 'react-router-dom'
import { IMovie } from './Movies'
import axios from 'axios'
import MovieHeader from '../components/MovieHeader'
import Similiar from '../components/Similiar'
import Modal from '../components/Modal'
import { Loader } from '../components/Loader'
import VideoPlayer from '../components/VideoPlayer'

const FullMovie = () => {
	const [movie, setMovie] = React.useState<IMovie>()
	const [membersModal, setMembersModal] = React.useState(false)
	const [trailerModal, setTrailerModal] = React.useState(false)
	const modalRef = React.useRef<HTMLDivElement>(null)
	const modalActersOpenRef = React.useRef<HTMLDivElement>(null)
	const modalTrailerOpenRef = React.useRef<HTMLButtonElement>(null)
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
	}, [params])

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (
				(modalActersOpenRef.current &&
					_event.includes(modalActersOpenRef.current)) ||
				(modalTrailerOpenRef.current &&
					_event.includes(modalTrailerOpenRef.current))
			) {
			} else if (modalRef.current && !_event.includes(modalRef.current)) {
				setMembersModal(false)
				setTrailerModal(false)
				document.body.style.overflow = 'auto'
			}
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const onOpenMembersModal = () => {
		setMembersModal(true)
		document.body.style.overflow = 'hidden'
	}

	const onOpenTrailerModal = () => {
		setTrailerModal(true)
		document.body.style.overflow = 'hidden'
	}

	const onCloseModal = () => {
		setMembersModal(false)
		setTrailerModal(false)
		document.body.style.overflow = 'auto'
	}

	if (movie) {
		return (
			<>
				{membersModal && (
					<Modal
						modalRef={modalRef}
						onCloseModal={onCloseModal}
						title='Участники:'
					>
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
				{trailerModal && (
					<Modal
						modalRef={modalRef}
						onCloseModal={onCloseModal}
						title={`Трейлер "${movie.title}"`}
					>
						<VideoPlayer />
					</Modal>
				)}
				<MovieHeader
					modalTrailerOpenRef={modalTrailerOpenRef}
					modalActersOpenRef={modalActersOpenRef}
					onOpenModal={onOpenMembersModal}
					onOpenTrailerModal={onOpenTrailerModal}
					{...movie}
				/>
				<Similiar id={movie.id} />
			</>
		)
	}

	return <Loader />
}

export default FullMovie
