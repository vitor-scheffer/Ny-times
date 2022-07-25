import { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import Tabs from '../../components/Tabs/Tabs';
import HeroNews from '../../components/HeroNews/HeroNews';
import styles from '../Mundo/World.module.css';
import ListSection from '../../components/ListSection/ListSection';
import ListArticleDateTag from '../../components/ArticleDateTag/ArticleDateTag';

const Tecnologia = () => {

    const [techArticles, setTechArticles] = useState({});
    const [social, setSocial] = useState(false);
  
    const url =
      'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77';
  
    const navArray = [
      'Dealbook',
      'Markets',
      'Economy',
      'Energy',
      'Media',
      'Technology',
      'Personal Tech',
      'Small Businnes',
      'Your Money',
      'MUTUAL FUNDS & ETFS'
    ];
  
    const Setup = async () => {
      try {
        let { data } = await axios.get(`${url}`);
        setTechArticles(data);
        return;
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      Setup();
    }, []);
  
    const articlesExists = Object.keys(techArticles).length > 0;

  return (
    <>
			{articlesExists ? (
				<div className={styles.worldPage}>
					<PageHeader title='Technology' navArray={navArray} />
					<section className={styles.worldTopSection}>
						<HeroNews article={techArticles.results[2]} type='medium' />
						<div>
							<div>
								<HeroNews article={techArticles.results[4]} type='small' />
								<div>
									{techArticles.results.slice(-3).map((article) => (
										<ListArticleDateTag article={article} inverted={true} />
									))}
								</div>
							</div>
						</div>
					</section>

					<section>
						<ListSection
							articles={techArticles.results.slice(7, 12)}
							withTag={true}
						/>
						<ListSection
							articles={techArticles.results.slice(4, 9)}
							withTag={true}
						/>
					</section>

					<section>
						<ListSection
							articles={techArticles.results.slice(2, 7)}
							title='The Saturday Profile'
						/>

						<ListSection
							articles={techArticles.results.slice(-5)}
							title='Dispatches'
						/>
					</section>

					<section>
						<ListSection
							articles={techArticles.results.slice(2, 7)}
							title='Read The Times in Spanish'
						/>
					</section>
					<Tabs articles={techArticles} social={social} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Tecnologia