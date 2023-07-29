import { useState } from 'react';

import './Main.css';
import CallToAction from 'components/CallToAction';
import Features from 'components/Features';
import Modal from 'components/Modal';
const Main = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleCtaClick = () => {
		setOpenModal(true);
	};

	return (
		<main className='main'>
			<Modal open={openModal} onClose={(e) => setOpenModal(false)}>
				<h1>Alert Modal here</h1>
				<p>alert modal description</p>
			</Modal>
			<CallToAction onClick={handleCtaClick} />
			<Features />
		</main>
	);
};
export default Main;
