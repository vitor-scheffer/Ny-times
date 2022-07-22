import moment from 'moment';

import Title from '../../images/theNewYorkTimes.svg';
import styles from './HeaderTitle.module.css';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const HeaderTitle = () => {
	const date = moment().format('dddd, MMMM D, YYYY');

	return (
		<div className={styles.container}>
			<div>
				<p>{date}</p>
				<a href='#'>Today's Paper</a>
			</div>
			<img src={Title} alt='The New York Times'></img>
			<div>
				<WeatherWidget />
			</div>
		</div>
	);
};
export default HeaderTitle;
