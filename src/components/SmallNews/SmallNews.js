import {Link} from 'react-router-dom'
import styles from './SmallNews.module.css'

const SmallNews = ({img, titulo}) => {
  const smallImg = img.filter(e => e.height === 150)

  return (
    <div className={styles.smNews}>
      <Link to="/detalhenoticia">
      <img src={smallImg[0].url} alt="" />
      <h3>{titulo}</h3>
      </Link>
    </div>
  )
}
export default SmallNews