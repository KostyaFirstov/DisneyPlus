import React from 'react'

interface IDuration {
	formatCurrentTime: string
	formatDuration: string
}

const Duration: React.FC<IDuration> = ({
	formatCurrentTime,
	formatDuration
}) => {
	return (
		<span className='player-time'>
			{formatCurrentTime} / {formatDuration}
		</span>
	)
}

export default Duration
