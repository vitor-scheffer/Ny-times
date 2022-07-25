import { Link } from 'react-router-dom';

const bottomNews = ({ mainNews }) => {
	const mainExists = Object.keys(mainNews).length > 0;
	const urlSearch = mainNews.url.slice(22, -5);

	return (
		<>
			{mainExists ? (
				<>
					<div>
						<Link to={`/detalhenoticia/${urlSearch.replaceAll('/', '---')}/`}>
							<h3>{mainNews.title}</h3>
						</Link>
					</div>
				</>
			) : (
				<div></div>
			)}
		</>
	);
};
export default bottomNews;
