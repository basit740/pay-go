import './Hero.css';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero__content'>
					<div className='hero__text-box'>
						<div className='hero__title-box'>
							<span className='tag-line'>
								Welcome to{' '}
								<span className='tag-line__green'>Pay Go Charge</span>
								<img src='/assets/imgs/charge.png' alt='pay go charge' />
							</span>
							<h1 className='hero__title'>
								<span className='hero__title-1'>Powering the </span>
								<span className='hero__title-2'>
									Future, One <span className='title-green'>Charge</span>
								</span>
								<span className='hero__title-3'>at a Time</span>
							</h1>
						</div>
						<p className='hero__description'>
							Are you ready to revolutionize the way electric vehicle owners
							charge their cars? Look no further! Our cutting-edge charging
							solution is designed to meet the growing demands of the electric
							vehicle industry while offering a seamless and user-friendly
							experience for both EV owners and charging station operators. Just
							add credits to start the charger.
						</p>
					</div>
					<div className='hero__img-box'>
						<img
						className='hero__img'
							src='/assets/imgs/hero-img.png'
							alt='car being chared at pay-go'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
