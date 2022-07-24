import { useEffect } from 'react'
import styles from './Opinion.module.css';
import img1 from '../../images/authors/author1.webp'
import img2 from '../../images/authors/author2.webp'
import img3 from '../../images/authors/author3.webp'
import img4 from '../../images/authors/author4.webp'

const Opinion = ({ article, isImg, isAuthor, isBorder}) => {
	const articleExists = article && article.length > 0;

const authors = [
	{
		name: 'MICHELLE GOLDBERG',
		url: img2
	},
	{
		name: 'JAMELLE BOUIE',
		url : img1
	},
	{
		name: 'PAUL KRUGMAN',
		url : img3
	},
	{
		name: 'ROSS DOUTHAT',
		url : img4
	}
]

const kickerExists = article[0].kicker !== ''
let img;

{kickerExists ? (authors.forEach(e => e.name === article[0].kicker.toUpperCase() ? img = e.url : img = '')) : (<></>)}


	return (
		<>
			{articleExists ? (
				<div className={styles.opinion} style={{borderBottom: isBorder ? '1px solid #dfdfdf' : ''}}>
					<div>
						<p>{article[0].kicker.toUpperCase()}</p>
						<h3>{article[0].title}</h3>
					</div>
					{isImg ? <img src={article[0].multimedia[2].url} alt='Thumbnail' /> : ''}
					{isAuthor ? <img style={{maxHeight: '44px'}}src={img} alt="" /> : ''} 
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default Opinion;
