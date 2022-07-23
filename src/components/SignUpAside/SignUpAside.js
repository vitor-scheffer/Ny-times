import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import styles from './SignUpAside.module.css';

const SignUpAside = (props) => {
	const article = props.article;
	const socialMedia = props.socialMedia;
	console.log(props);
	return (
		<aside className={styles.signUpSection}>
			<div>
				<h2>{article.title.toUpperCase()}</h2>
				<p>{article.abstract}</p>
				<button>SIGN UP</button>
			</div>
			{socialMedia ? (
				<div>
					<h2>FOLLOW US</h2>
					<a href={`https://www.facebook.com/${socialMedia.toLowerCase()}`}>
						<AiFillFacebook style={{ color: '#3e5b97' }} size={20} />
						<p>{socialMedia}</p>
					</a>
					<a href={`https://www.facebook.com/${socialMedia}`}>
						<AiOutlineTwitter style={{ color: '#1dacef' }} size={20} />
						<p>@{socialMedia}</p>
					</a>
				</div>
			) : (
				<></>
			)}
		</aside>
	);
};
export default SignUpAside;
