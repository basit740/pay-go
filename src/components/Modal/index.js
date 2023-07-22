import React from 'react';
import './Modal.css';
const Index = ({ children, onClose, open }) => {
	if (open) {
		document.querySelector('body').style.overflow = 'hidden';
	} else {
		document.querySelector('body').style.overflow = 'auto';
	}
	return (
		<div className={`modal ${open ? 'open' : ''}`} onClick={onClose}>
			<div className='modal__content'>{children}</div>
		</div>
	);
};

export default Index;
