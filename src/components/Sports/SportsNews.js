import styles from './SportsNews.module.css'
import { Link } from 'react-router-dom'

const SportsNews = ({sports}) => {
  const sportsExists = Object.keys(sports).length > 0;

  return (
    <>
    {sportsExists ? (
    <Link to={`/detalhenoticia/${sports.title}/${sports.abstract}`}>
    <div className={styles.containerFlex}>
      <div>
        <h3>{sports.title}</h3>
        <p>{sports.abstract}</p>
      </div>
      <div>
       <img src={sports.multimedia[1].url} alt="" />
        <p><small>{sports.multimedia[1].copyright}</small></p>
      </div>
    </div>
    </Link>
  
    ) : (<div></div>) }
    </>
    
  )
}
export default SportsNews