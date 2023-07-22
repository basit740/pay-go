import React from 'react';
import './Modal.css';
const Index = ({ children, onClose, open }) => {
	return (
		<div className={`modal ${open ? 'open' : ''}`} onClick={onClose}>
			<div className='modal__content'>{children}</div>
		</div>
	);
};

export default Index;
