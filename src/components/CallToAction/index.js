import React from 'react';
import './CallToAction.css';
import CtaTextItem from 'components/CtaTextItem';
import CtaButton from 'components/CtaButton';
import Barometer from '../Barometer';
const CallToAction = ({ onClick }) => {
	return (
		<div className='cta'>
			<div className='container'>
				<div className='cta__content'>
					<div className='cta__texts'>
						<div className='cta__texts-left'>
							<CtaTextItem label='Status' value='Ready' />
							<CtaTextItem label='Credits' value='150 kr' />
							<CtaTextItem label='Remaining Energy' value='30 kWh' />
							<CtaButton onClick={onClick} />
						</div>
						<div className='cta__texts-right'>
							<CtaTextItem label='Current Power' value='7.5kW' />
							<CtaTextItem label='Max Power' value='11kW' />
						</div>
					</div>
					<div className='cta__img'>
						{/* <img src='/assets/imgs/charging-bar.png' alt='' /> */}
						<Barometer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
