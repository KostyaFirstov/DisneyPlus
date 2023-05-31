import React from 'react'
import ContentLoader from 'react-content-loader'

const MoviesSkeleton = (props: any) => {
	return (
		<ContentLoader
			speed={2}
			width='100%'
			height='100%'
			viewBox='0 0 320 180'
			backgroundColor='#40464E'
			foregroundColor='#6F757D'
			{...props}
		>
			<rect x='0' y='0' rx='8' ry='8' width='311' height='175' />
		</ContentLoader>
	)
}

export default MoviesSkeleton
