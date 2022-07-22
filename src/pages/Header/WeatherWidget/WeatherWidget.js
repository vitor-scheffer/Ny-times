import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './WeatherWidget.module.css';

const WeatherWidget = () => {
	const [weather, setWeather] = useState();
	const [iconUrl, setIconUrl] = useState('');

	const setup = async () => {
		try {
			const weatherUrl =
				'https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-70&units=metric&appid=1024e12a203e194a70057c7e5c599ec1';

			const { data } = await axios.get(`${weatherUrl}`);

			setWeather(data);

			setIconUrl(
				`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
			);
		} catch (error) {
			console.log('Erro => ', error);
		}
	};

	useEffect(() => {
		setup();
	}, []);

	return (
		<div className={styles.weather}>
			{weather && (
				<>
					<img src={iconUrl} alt='' />
					<p>{Math.round(weather.main.temp)}&deg;C</p>
					<p>{Math.round(weather.main.temp_max)}&deg;</p>
					<p>{Math.round(weather.main.temp_min)}&deg;</p>
				</>
			)}
		</div>
	);
};
export default WeatherWidget;
