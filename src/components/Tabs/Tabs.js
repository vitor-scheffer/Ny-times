import { useState } from 'react';
import LatestSection from '../LatestSection/LatestSection';
import styles from './Tabs.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

//Recebe objeto api

const Tabs = ({ articles }) => {
	const [activeTab, setActiveTab] = useState('Latest');
	const [latestVisibility, setLatestVisibility] = useState('block');

	const changeTab = () => {
		const newActiveTab = activeTab === 'Latest' ? 'Search' : 'Latest';

		setActiveTab(newActiveTab);
	};

	return (
		<div className={styles.tabs}>
			{/* Tab nav */}
			<ul>
				<li
					className={activeTab === 'Latest' ? `${styles.active}` : ''}
					onClick={changeTab}
				>
					Latest
				</li>
				<li
					className={activeTab === 'Search' ? `${styles.active}` : ''}
					onClick={changeTab}
				>
					<BiSearchAlt2 size={20} style={{ marginRight: '4px' }} /> Search
				</li>
			</ul>
			<div style={{ display: `${latestVisibility}` }}>
				<LatestSection articles={articles} />
			</div>
		</div>
	);
};
export default Tabs;
