import { Link } from 'react-router-dom';
import styles from './Opinion.module.css';
import img1 from '../../images/authors/author1.webp';
import img2 from '../../images/authors/author2.webp';
import img3 from '../../images/authors/author3.webp';
import img4 from '../../images/authors/author4.webp';
import img5 from '../../images/authors/img5.webp';
import img6 from '../../images/authors/img6.webp';
import img7 from '../../images/authors/img7.webp';
import img8 from '../../images/authors/img8.webp';

const Opinion = ({ article, isImg, isAuthor, isBorder }) => {
	const articleExists = article && article.length > 0;
	let urlSearch;
	if (articleExists) {
		urlSearch = article[0].url.slice(22, -5);
	}

	const authors = [
		{
			name: 'MICHELLE GOLDBERG',
			url: img2,
		},
		{
			name: 'JAMELLE BOUIE',
			url: img1,
		},
		{
			name: 'PAUL KRUGMAN',
			url: img3,
		},
		{
			name: 'ROSS DOUTHAT',
			url: img4,
		},
		{
			name: 'JANE COASTON',
			url: img5,
		},
		{
			name: 'PAMELA PAUL',
			url: img6,
		},
		{
			name: 'MARA GAY',
			url: img7,
		},
		{
			name: 'CHARLES M. BLOW',
			url: img8,
		},
	];

	const kickerExists = articleExists && article[0].kicker !== '';
	let img;

	{
		kickerExists && articleExists ? (
			authors.forEach((e) =>
				e.name === article[0].kicker.toUpperCase() ? (img = e.url) : (img = img)
			)
		) : (
			<></>
		);
	}

	return (
		<>
			{articleExists ? (
				<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
					<div
						className={styles.opinion}
						style={{ borderBottom: isBorder ? '1px solid #dfdfdf' : '' }}
					>
						<div>
							<p>{article[0].byline.toUpperCase().substring(3)}</p>
							<h3>{article[0].title}</h3>
						</div>
						{isImg ? (
							<img src={article[0].multimedia[2].url} alt='Thumbnail' />
						) : (
							''
						)}
						{isAuthor ? (
							<img style={{ maxHeight: '44px' }} src={img} alt='' />
						) : (
							''
						)}
					</div>
				</Link>
			) : (
				<></>
			)}
		</>
	);
};
export default Opinion;
