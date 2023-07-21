import './Header.css';
import ContactButton from 'components/ContactButton';
const Header = () => {
	const handleClick = () => {
		console.log('clicked');
	};
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__nav'>
					<a href='/'>
						<img src='/assets/imgs/logo.png' alt='pay go logo' />
					</a>
					<ContactButton onClick={handleClick} />
				</nav>
			</div>
		</header>
	);
};
export default Header;
