import React from 'react'
import ReactPlayer from 'react-player'
import ControlsVideo from './ControlsVideo'
import { formatTime } from './Duration'
import screenfull from 'screenfull'
import LoaderVideo from './components/LoaderVideo'

interface IVideoOptions {
	playing: boolean
	volume: number
	muted: boolean
	played: number
	seeking: boolean
	playedSeconds: number
	loadedSeconds: number
	buffer: boolean
}

type VideoProgress = {
	playedSeconds: number
	loadedSeconds: number
}

const VideoPlayer = () => {
	const [options, setOptions] = React.useState<IVideoOptions>({
		playing: false,
		volume: 0.1,
		muted: false,
		played: 0,
		seeking: false,
		playedSeconds: 0,
		loadedSeconds: 0,
		buffer: false
	})
	const playerRef = React.useRef<ReactPlayer>(null)
	const playerWrapperRef = React.useRef<HTMLDivElement>(null)
	const { playing, volume, muted, played, buffer } = options
	const [playBtnValue, setPlayBtn] = React.useState(playing)

	const handlePlay = () => {
		setOptions({ ...options, playing: !options.playing })
		setPlayBtn(!playing)
	}

	const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOptions({ ...options, volume: Number(event.target.value) })
	}

	const handleToggleMuted = () => {
		if (options.muted) {
			setOptions({ ...options, volume: 0.1, muted: false })
		} else {
			setOptions({ ...options, volume: 0, muted: !options.muted })
		}
	}

	const handleProgress = (e: VideoProgress) => {
		setOptions({
			...options,
			...e
		})
	}

	const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOptions({ ...options, played: parseFloat(e.target.value) })
	}

	const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
		setOptions({ ...options, seeking: false })
		playerRef?.current?.seekTo(parseFloat(e.currentTarget.value))
	}

	const handleSeekMouseDown = () => {
		setOptions({ ...options, seeking: true })
	}

	const handleRewindForward = () => {
		playerRef?.current?.seekTo(playerRef.current.getCurrentTime() + 10)
	}

	const handleRewindBack = () => {
		playerRef?.current?.seekTo(playerRef.current.getCurrentTime() - 10)
	}

	const bufferStartHandler = () => {
		setOptions({ ...options, buffer: true })
	}

	const bufferEndHandler = () => {
		setOptions({ ...options, buffer: false })
	}

	const handleFullScreen = () => {
		if (playerWrapperRef.current) {
			screenfull.toggle(playerWrapperRef.current)
		}
	}

	const currentTime = playerRef.current
		? playerRef.current.getCurrentTime()
		: '00:00'
	const duration = playerRef.current ? playerRef.current.getDuration() : '00:00'

	const formatCurrentTime = formatTime(currentTime)
	const formatDuration = formatTime(duration)

	return (
		<div ref={playerWrapperRef} className='player-wrapper'>
			<ReactPlayer
				muted={muted}
				playing={playing}
				controls={false}
				volume={volume}
				url='https://youtu.be/9IHYsdO7Sug'
				ref={playerRef}
				onProgress={handleProgress}
				onBuffer={bufferStartHandler}
				onBufferEnd={bufferEndHandler}
			/>
			{!buffer ? (
				<ControlsVideo
					played={played}
					handleSeekChange={handleSeekChange}
					handleSeekMouseUp={handleSeekMouseUp}
					handleSeekMouseDown={handleSeekMouseDown}
					handleVolume={handleVolume}
					handlePlay={handlePlay}
					handleToggleMuted={handleToggleMuted}
					volumeValue={volume}
					handleRewindForward={handleRewindForward}
					handleRewindBack={handleRewindBack}
					formatCurrentTime={formatCurrentTime}
					formatDuration={formatDuration}
					playBtnValue={playBtnValue}
					handleFullScreen={handleFullScreen}
				/>
			) : (
				<LoaderVideo />
			)}
		</div>
	)
}

export default VideoPlayer
