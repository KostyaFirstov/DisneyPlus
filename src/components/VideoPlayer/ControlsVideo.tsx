import React from 'react'
import PlayBtn from './components/PlayBtn'
import Volume from './components/Volume'
import Timeline from './components/Timeline'
import Duration from './components/Duration'
import RewinderForward from './components/RewinderForward'
import RewinderBack from './components/RewinderBack'
import FullScreen from './components/FullScreen'

interface IControlsVideoProps {
	handlePlay: () => void
	handleVolume: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleToggleMuted: () => void
	handleSeekChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleSeekMouseDown: (event: React.MouseEvent<HTMLInputElement>) => void
	handleSeekMouseUp: (event: React.MouseEvent<HTMLInputElement>) => void
	handleRewindBack: () => void
	handleRewindForward: () => void
	handleFullScreen: () => void
	volumeValue: number
	played: number
	formatCurrentTime: string
	formatDuration: string
	playBtnValue: boolean
}

const ControlsVideo: React.FC<IControlsVideoProps> = ({
	handlePlay,
	handleVolume,
	handleToggleMuted,
	handleSeekChange,
	handleSeekMouseDown,
	handleSeekMouseUp,
	handleRewindBack,
	handleRewindForward,
	handleFullScreen,
	volumeValue,
	played,
	formatCurrentTime,
	formatDuration,
	playBtnValue
}) => {
	return (
		<div className='controlsbar__wrapper'>
			<div className='controls__main'>
				<RewinderBack handleRewindBack={handleRewindBack} />
				<PlayBtn handlePlay={handlePlay} playBtnValue={playBtnValue} />
				<RewinderForward handleRewindForward={handleRewindForward} />
			</div>
			<div className='controls__footer'>
				<Timeline
					played={played}
					handleSeekChange={handleSeekChange}
					handleSeekMouseUp={handleSeekMouseUp}
					handleSeekMouseDown={handleSeekMouseDown}
				/>
				<div className='controls__footer-left'>
					<PlayBtn handlePlay={handlePlay} playBtnValue={playBtnValue} />
					<Volume
						handleToggleMuted={handleToggleMuted}
						volumeValue={volumeValue}
						handleVolume={handleVolume}
					/>
					<Duration
						formatCurrentTime={formatCurrentTime}
						formatDuration={formatDuration}
					/>
				</div>
				<div className='controls__footer-right'>
					<FullScreen handleFullScreen={handleFullScreen} />
				</div>
			</div>
		</div>
	)
}

export default ControlsVideo
