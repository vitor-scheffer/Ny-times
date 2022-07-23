import {Link} from 'react-router-dom'
import styles from './FirstNews.module.css'

const News = ({mainNews, descricao, isBorder, isBottom, isBorderRight}) => {
  const mainExists = Object.keys(mainNews).length > 0;

  return (
    <>
    {mainExists ? (
      <>
      <div className={styles.text} style={{
      borderBottom: isBorder ? '1px solid #dfdfdf' : '',
      borderRight: isBorderRight ? '1px solid #dfdfdf' : '',
      fontSize: isBottom ? '14px' : ''}} >
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