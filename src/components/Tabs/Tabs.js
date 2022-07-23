import { useState } from 'react';
import LatestSection from '../LatestSection/LatestSection';
import styles from './Tabs.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

//Recebe objeto api

const Tabs = ({ articles, social }) => {
	const [activeTab, setActiveTab] = useState('Latest');
	const [inputValue, setInputValue] = useState('');

	const changeTab = (e) => {
		if (e.target.id === activeTab || e.target.type === 'text') {
			return;
		}
		const newActiveTab = activeTab === 'Latest' ? 'Search' : 'Latest';

		setActiveTab(newActiveTab);
	};

	return (
		<div className={styles.tabs}>
			{/* Tab nav */}
			<ul>
				<li
					id='Latest'
					className={activeTab === 'Latest' ? `${styles.active}` : ''}
					onClick={changeTab}
				>
					Latest
				</li>
				<li
					className={activeTab === 'Search' ? `${styles.active}` : ''}
					onClick={changeTab}
				>
					{activeTab === 'Search' ? (
						<span>
							<BiSearchAlt2 size={20} style={{ marginRight: '4px' }} />
							<input
								type='text'
								placeholder='Search'
								onChange={(e) => setInputValue(e.target.value)}
								value={inputValue}
							/>
							<span>
								<AiOutlineClose onClick={() => setInputValue('')} />
							</span>
						</span>
					) : (
						<span id='Search'>
							<BiSearchAlt2 size={20} style={{ marginRight: '4px' }} /> Search
						</span>
					)}
				</li>
			</ul>
			<div>
				{activeTab === 'Latest' ? (
					<LatestSection articles={articles} social={social} />
				) : (
					<LatestSection articles={articles} />
				)}
			</div>
		</div>
	);
};
export default Tabs;
