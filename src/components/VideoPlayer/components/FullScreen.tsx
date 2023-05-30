import React from 'react'

interface FullScreenProps {
	handleFullScreen: () => void
}

const FullScreen: React.FC<FullScreenProps> = ({ handleFullScreen }) => {
	return (
		<div className='player-fullscreen' onClick={handleFullScreen}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.14286 14.2857C4.51429 14.2857 4 14.8 4 15.4286V18.8571C4 19.4857 4.51429 20 5.14286 20H8.57143C9.2 20 9.71429 19.4857 9.71429 18.8571C9.71429 18.2286 9.2 17.7143 8.57143 17.7143H6.28571V15.4286C6.28571 14.8 5.77143 14.2857 5.14286 14.2857ZM5.14286 9.71429C5.77143 9.71429 6.28571 9.2 6.28571 8.57143V6.28571H8.57143C9.2 6.28571 9.71429 5.77143 9.71429 5.14286C9.71429 4.51429 9.2 4 8.57143 4H5.14286C4.51429 4 4 4.51429 4 5.14286V8.57143C4 9.2 4.51429 9.71429 5.14286 9.71429ZM17.7143 17.7143H15.4286C14.8 17.7143 14.2857 18.2286 14.2857 18.8571C14.2857 19.4857 14.8 20 15.4286 20H18.8571C19.4857 20 20 19.4857 20 18.8571V15.4286C20 14.8 19.4857 14.2857 18.8571 14.2857C18.2286 14.2857 17.7143 14.8 17.7143 15.4286V17.7143ZM14.2857 5.14286C14.2857 5.77143 14.8 6.28571 15.4286 6.28571H17.7143V8.57143C17.7143 9.2 18.2286 9.71429 18.8571 9.71429C19.4857 9.71429 20 9.2 20 8.57143V5.14286C20 4.51429 19.4857 4 18.8571 4H15.4286C14.8 4 14.2857 4.51429 14.2857 5.14286Z'
					fill='white'
				/>
			</svg>
		</div>
	)
}

export default FullScreen