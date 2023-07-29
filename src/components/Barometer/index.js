import React from 'react';
import Rainbow from './icons/Rainbow.jsx';
import './Barometer.css';
const Barometer = () => {
	return (
		<div className='speedometer'>
			<Rainbow />
			<img
				src='assets/imgs/needle.png'
				alt='needle Barometer'
				className='speedometer__needle'
			/>
		</div>
	);
};

export default Barometer;
