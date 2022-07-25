import styles from './Missed.module.css';
import { Link } from 'react-router-dom';

const Missed = ({ missed, isBorder }) => {
	const missedExists = Object.keys(missed).length > 0;
	let urlSearch;
	if (missedExists) {
		urlSearch = missed[0].url.slice(22, -5);
	}

	return (
		<>
			{missedExists ? (
				<>
					<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
						<div
							className={styles.flexContainer}
							style={{ borderBottom: isBorder ? '1px solid #dfdfdf' : '' }}
						>
							<h3>{missed[0].title}</h3>
							{'multimedia' in missed[0] && missed[0].multimedia !== null && (
								<img src={missed[0].multimedia[2].url} alt='' />
							)}
						</div>
					</Link>
				</>
			) : (
				<div></div>
			)}
		</>
	);
};
export default Missed;
