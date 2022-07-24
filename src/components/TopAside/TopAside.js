import styles from './TopAside.module.css';
import { Link } from 'react-router-dom'

const TopAside = ({mainAside}) => {
    const topExists = Object.keys(mainAside).length > 0;

    return (
      <>
      {topExists ? (
        <>
        <div className={styles.flexContainer}>
        <Link to={`/detalhenoticia/${mainAside[0].title}/${mainAside[0].abstract}`}>
          <img src={mainAside[0].multimedia[1].url} alt="" />
          <span><small>{}</small></span>
          <h3>{mainAside[0].title}</h3>
          <p>{mainAside[0].abstract}</p>
        </Link>
        </div>
        </>
      ) : (<div></div>) }
      
      
      </>
    )
  }
export default TopAside