import {Link} from 'react-router-dom'
import styles from './FirstNews.module.css'

const News = ({mainNews, descricao, isBorder}) => {
  const mainExists = Object.keys(mainNews).length > 0;

  return (
    <>
    {mainExists ? (
      <>
      <div className={styles.text} style={{
      borderBottom: isBorder ? '1px solid #dfdfdf' : ''}} >
      <Link to="/detalhenoticia">
        <h3>{mainNews.title}</h3>
        <p>{descricao ? descricao : ''}</p>
      </Link>
    </div>
      </>
    ) : (<div></div>
    )}
    </>
  )
}
export default News