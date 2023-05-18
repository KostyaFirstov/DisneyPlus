import React from 'react'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container container'>
				<div className='logo'>
					<a href='#'>
						<img src='./images/logo.svg' alt='Logo' />
					</a>
				</div>
				<div className='footer__desc'>
					Disney+ es un servicio por suscripción de pago, su contenido está
					sujeto a disponibilidad. El servicio Disney+ es comercializado por
					Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
				</div>
				<div className='footer__rules'>© Disney. Все права защищены.</div>
			</div>
		</div>
	)
}

export default Footer
