import styles from './DetalheNoticia.module.css';
import gift from '../../images/gift.svg';
import share from '../../images/share-1.svg';
import save from '../../images/save.svg';
import HeaderTop from '../../pages/Header/HeaderTop/HeaderTop';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DetalheNoticia = ({ Api }) => {
	let { urlSearch } = useParams();

	const [article, setArticle] = useState({});

	const url = `"https://www.nytimes.com/${urlSearch
		.replaceAll('---', '/')
		.slice(2)}.html"`;

	const Setup = async () => {
		try {
			let { data } = await axios.get(
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:(${url})&api-key=7AXlTACqQRpVzaH4Af1YBCgfwBb8cT77`
			);

			setArticle(data.response.docs[0]);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		Setup();
	}, []);

	const articleExists = Object.keys(article).length > 0;

	return (
		<>
			{articleExists ? (
				<div>
					<HeaderTop headerType='page' title='' className={styles.header} />

					<div className={styles.flexContainer}>
						<h3>{article.headline.main}</h3>

						<p>{article.abstract}</p>
						<div className={styles.bottomContainer}>
							<div className={styles.authInfo}>
								<span>
									{articleExists && (
										<strong>
											{moment(article.published_date).format('LL')}
										</strong>
									)}
								</span>
								<span>{article.byline.original.substring(3)}</span>
							</div>
							<div className={styles.interactions}>
								<button>
									<img src={gift} alt='' />
									Give this article
								</button>
								<button>
									<img src={share} alt='' />
								</button>
								<button>
									<img src={save} alt='' />
								</button>
							</div>
						</div>
						<img
							src={`https://static01.nyt.com/${article.multimedia[0].url}`}
							alt=''
						/>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default DetalheNoticia;
