import axios from 'axios';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './Health.module.css';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import ListSection from '../../components/ListSection/ListSection';

const Saude = () => {
	const [healthArticles, setHealthArticles] = useState({});
	const [social, setSocial] = useState(true);

	const url =
		'https://api.nytimes.com/svc/topstories/v2/health.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';

	const navArray = [
		'Health Policy',
		'Global Health',
		'The New Old Age',
		'Science',
		'Well',
		'Coronavirus Outbreak',
	];

	const Setup = async () => {
		try {
			let { data } = await axios.get(`${url}`);
			setHealthArticles(data);
			return;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	const articlesExists = Object.keys(healthArticles).length > 0;

	return (
		<>
			{articlesExists ? (
				<div className={styles.healthPage}>
					<PageHeader title='Health' navArray={navArray} />
					<section>
						<section>
							<HeroNews
								article={healthArticles.results[2]}
								type='large'
								direction='row'
							/>
							<div className={styles.listHero}>
								<HeroNews article={healthArticles.results[3]} type='small2' />
								<HeroNews article={healthArticles.results[5]} type='small2' />
								<HeroNews article={healthArticles.results[7]} type='small2' />
							</div>
						</section>

						<section>
							<ListSection
								articles={healthArticles.results.slice(8, 13)}
								withTag={true}
							/>
						</section>

						<section>
							<ListSection
								articles={healthArticles.results.slice(2, 7)}
								title='From Well'
							/>

							<ListSection
								articles={healthArticles.results.slice(-5)}
								title='The covid Pandemic'
							/>
						</section>
					</section>

					<Tabs articles={healthArticles} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Saude;
