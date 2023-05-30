import React from 'react'

interface IRewinderBackProps {
	handleRewindBack: () => void
}

const RewinderBack: React.FC<IRewinderBackProps> = ({ handleRewindBack }) => {
	return (
		<button className='player__btn-forward' onClick={handleRewindBack}>
			<svg
				width='80'
				height='80'
				viewBox='0 0 80 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M39.9822 19.3149V11.1763C39.9822 9.86359 38.4069 9.22183 37.5027 10.1553L26.447 21.211C25.8636 21.7944 25.8636 22.6987 26.447 23.2821L37.5027 34.3378C38.4069 35.242 39.9822 34.6003 39.9822 33.3168V25.149C50.8628 25.149 59.4681 35.1254 57.0761 46.4144C55.7051 53.0361 50.3377 58.3744 43.7452 59.7454C33.3312 61.9332 24.055 54.7864 22.6548 45.1309C22.4798 43.7307 21.2546 42.6514 19.7961 42.6514C18.0458 42.6514 16.6456 44.1974 16.879 45.9477C18.6876 58.7536 30.8809 68.234 44.6786 65.5503C53.7799 63.7709 61.1017 56.4491 62.8811 47.3479C65.769 32.3833 54.4216 19.3149 39.9822 19.3149V19.3149ZM36.7734 51.4026H34.2939V41.8929L31.3476 42.7972V40.7845L36.5108 38.9467H36.7734V51.4026ZM49.2584 46.2685C49.2584 47.202 49.1709 48.0188 48.9667 48.6605C48.7625 49.3023 48.4708 49.8857 48.1208 50.3233C47.7707 50.7608 47.304 51.0817 46.8081 51.2859C46.3122 51.4901 45.7288 51.5776 45.087 51.5776C44.4453 51.5776 43.891 51.4901 43.3659 51.2859C42.8409 51.0817 42.4033 50.7608 42.0241 50.3233C41.6449 49.8857 41.3532 49.3315 41.149 48.6605C40.9448 47.9896 40.8281 47.202 40.8281 46.2685V44.1099C40.8281 43.1765 40.9156 42.3597 41.1198 41.7179C41.324 41.0762 41.6157 40.4928 41.9658 40.0552C42.3158 39.6176 42.7825 39.2968 43.2784 39.0926C43.7743 38.8884 44.3577 38.8009 44.9995 38.8009C45.6413 38.8009 46.1955 38.8884 46.7206 39.0926C47.2456 39.2968 47.6832 39.6176 48.0624 40.0552C48.4416 40.4928 48.7333 41.047 48.9375 41.7179C49.1417 42.3889 49.2584 43.1765 49.2584 44.1099V46.2685V46.2685ZM46.7789 43.7599C46.7789 43.2056 46.7497 42.7389 46.6622 42.3597C46.5747 41.9805 46.458 41.6888 46.3122 41.4554C46.1663 41.222 45.9913 41.047 45.7579 40.9595C45.5246 40.872 45.2912 40.8136 45.0287 40.8136C44.7661 40.8136 44.5036 40.872 44.2994 40.9595C44.0952 41.047 43.891 41.222 43.7452 41.4554C43.5993 41.6888 43.4826 41.9805 43.3951 42.3597C43.3076 42.7389 43.2784 43.2056 43.2784 43.7599V46.5894C43.2784 47.1437 43.3076 47.6104 43.3951 47.9896C43.4826 48.3688 43.5993 48.6897 43.7452 48.9231C43.891 49.1564 44.066 49.3315 44.2994 49.419C44.5328 49.5065 44.7661 49.5648 45.0287 49.5648C45.2912 49.5648 45.5537 49.5065 45.7579 49.419C45.9621 49.3315 46.1663 49.1564 46.3122 48.9231C46.458 48.6897 46.5747 48.3688 46.6331 47.9896C46.6914 47.6104 46.7497 47.1437 46.7497 46.5894V43.7599H46.7789Z'
					fill='white'
				/>
			</svg>
		</button>
	)
}

export default RewinderBack