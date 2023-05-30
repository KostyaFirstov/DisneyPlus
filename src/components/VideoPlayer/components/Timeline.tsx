import React from 'react'

interface ITimeline {
	played: number
	handleSeekChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleSeekMouseDown: (event: React.MouseEvent<HTMLInputElement>) => void
	handleSeekMouseUp: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Timeline: React.FC<ITimeline> = ({
	played,
	handleSeekChange,
	handleSeekMouseDown,
	handleSeekMouseUp
}) => {
	return (
		<div className='player-timeline'>
			<input
				type='range'
				min={0}
				max={0.999999}
				step='any'
				value={played}
				onMouseDown={handleSeekMouseDown}
				onChange={handleSeekChange}
				onMouseUp={handleSeekMouseUp}
			/>
		</div>
	)
}

export default Timeline
