import React from 'react'

const LoaderVideo = () => {
	return (
		<div className='loader-video'>
			<svg
				width='80'
				height='80'
				viewBox='0 0 80 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM7.60865 40C7.60865 57.8892 22.1108 72.3913 40 72.3913C57.8892 72.3913 72.3913 57.8892 72.3913 40C72.3913 22.1108 57.8892 7.60865 40 7.60865C22.1108 7.60865 7.60865 22.1108 7.60865 40Z'
					fill='url(#paint0_angular_561_5167)'
				/>
				<defs>
					<radialGradient
						id='paint0_angular_561_5167'
						cx='0'
						cy='0'
						r='1'
						gradientUnits='userSpaceOnUse'
						gradientTransform='translate(27.0175 47.7193) rotate(-68.3267) scale(85.2458 119.267)'
					>
						<stop offset='0.0237023' stopColor='#037AEB' stopOpacity='0.9' />
						<stop offset='0.209649' stopColor='#11FFFF' />
						<stop offset='0.429288' stopColor='white' />
						<stop offset='0.689618' stopColor='white' />
					</radialGradient>
				</defs>
			</svg>
		</div>
	)
}

export default LoaderVideo
