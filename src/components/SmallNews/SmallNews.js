import { Link } from 'react-router-dom';
import styles from './SmallNews.module.css';
import { useEffect } from 'react';

const SmallNews = ({ smallAside, setDescricao, setImg, setTitle }) => {
	const smallExists = Object.keys(smallAside).length > 0;

	useEffect(() => {
		if (setDescricao && setImg && setTitle && smallExists) {
			setDescricao(smallAside[0].abstract);
			setImg(smallAside[0].multimedia[0].url);
			setTitle(smallAside[0].title);
		}
	}, [smallAside]);

	return (
		<>
			{smallExists ? (
				<div className={styles.smNews}>
					<Link to='/detalhenoticia'>
						<img src={smallAside[0].multimedia[2].url} alt='' />
						<h3>{smallAside[0].title}</h3>
					</Link>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
};
export default SmallNews;
