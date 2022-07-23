import {Link} from 'react-router-dom'
import styles from './SmallNews.module.css'

const SmallNews = ({smallAside}) => {
  const smallExists = Object.keys(smallAside).length > 0;
  
  
  return (
    
    <>
    {smallExists ? (
    <div className={styles.smNews}>
      <Link to="/detalhenoticia">
      <img src={smallAside[0].multimedia[2].url} alt="" />
      <h3>{smallAside[0].title}</h3>
      </Link>
    </div>
    
    ) : (<div></div>) }
    </>
    
  )
}
export default SmallNews