import React from 'react';
import './CtaButton.css';
const Index = ({ onClick }) => {
	return (
		<button className='cta-button' type='button' onClick={onClick}>
			<img
				src='assets/imgs/cta-energy-button.png'
				alt='Cta line engery button'
			/>
			<span className='cta-button__text'>Buy Enery</span>
		</button>
	);
};

export default Index;
