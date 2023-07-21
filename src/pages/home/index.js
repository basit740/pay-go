import './Home.css';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Main from 'components/Main';
import Footer from 'components/Footer';

const Home = () => {
	return (
		<article className='home'>
			<Header />
			<Hero />
			<Main />
			<Footer />
		</article>
	);
};

export default Home;
