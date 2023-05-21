import React from 'react'

type ModalProps = {
	title: string
	children: React.ReactNode
	onCloseModal: () => any
}

const Modal: React.FC<ModalProps> = ({
	title,
	children,

	onCloseModal
}) => {
	return (
		<div className='modal__window'>
			<div className='modal__container'>
				<div className='modal__title'>
					<h2>{title}</h2>
				</div>
				<div className='modal__content'>{children}</div>
				<div className='modal__btn-close'>
					<button onClick={onCloseModal}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M23.4676 0.550626C22.7577 -0.159271 21.6109 -0.159271 20.901 0.550626L12 9.43345L3.09898 0.532423C2.38908 -0.177474 1.24232 -0.177474 0.532423 0.532423C-0.177474 1.24232 -0.177474 2.38908 0.532423 3.09898L9.43345 12L0.532423 20.901C-0.177474 21.6109 -0.177474 22.7577 0.532423 23.4676C1.24232 24.1775 2.38908 24.1775 3.09898 23.4676L12 14.5666L20.901 23.4676C21.6109 24.1775 22.7577 24.1775 23.4676 23.4676C24.1775 22.7577 24.1775 21.6109 23.4676 20.901L14.5666 12L23.4676 3.09898C24.1593 2.40728 24.1593 1.24232 23.4676 0.550626V0.550626Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
