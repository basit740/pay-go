import React from 'react';
import './CtaTextItem.css';
const Index = ({ label, value }) => {
	return (
		<div className='cta-text-item'>
			<span className='cta-text__label'>{label}: </span>
			<span className='cta-text__value'>{value}</span>
		</div>
	);
};

export default Index;
