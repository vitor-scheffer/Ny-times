import {Link} from 'react-router-dom'
import styles from './SmallNews.module.css'

const SmallNews = ({smallAside}) => {
  const isSmall = Object.keys(smallAside).length > 0;
  
  return (
    
    <>
    {isSmall ? (
    <div className={styles.smNews}>
      <Link to="/detalhenoticia">
      <img src={smallAside.multimedia[2].url} alt="" />
      <h3>{smallAside.title}</h3>
      </Link>
    </div>
    
    ) : (<div></div>) }
    </>
    
  )
}
export default SmallNews