import React from 'react';
import './Modal.css';
const Index = ({ children, onClose, open }) => {
	if (open) {
		document.querySelector('body').style.overflow = 'hidden';
	} else {
		document.querySelector('body').style.overflowY = 'auto';
	}

	const doNotClose = (event) => {
		event.stopPropagation();
	};
	return (
		<div className={`modal ${open === true ? 'open' : ''}`} onClick={onClose}>
			<div className='modal__content' onClick={doNotClose}>
				{children}
			</div>
		</div>
	);
};

export default Index;
