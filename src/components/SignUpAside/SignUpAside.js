import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import styles from './SignUpAside.module.css';

const SignUpAside = ({ social }) => {
	const socialExists = social && Object.keys(social).length > 0;
	console.log(social);

	return (
		<>
			{socialExists ? (
				<aside className={styles.signUpSection}>
					<div>
						<h2>{social.title.toUpperCase()}</h2>
						<p>{social.abstract}</p>
						<button>SIGN UP</button>
					</div>
					{social.handle ? (
						<div>
							<h2>FOLLOW US</h2>
							<a
								href={`https://www.facebook.com/${social.handle.toLowerCase()}`}
							>
								<AiFillFacebook style={{ color: '#3e5b97' }} size={20} />
								<p>{social.handle}</p>
							</a>
							<a href={`https://www.facebook.com/${social.handle}`}>
								<AiOutlineTwitter style={{ color: '#1dacef' }} size={20} />
								<p>@{social.handle}</p>
							</a>
						</div>
					) : (
						<></>
					)}
				</aside>
			) : (
				<></>
			)}
		</>
	);
};
export default SignUpAside;
