import {Link} from 'react-router-dom'
import styles from './TituloDescricao.module.css'

const TituloDescricao = ({titulo, descricao, isBorder}) => {
  return (
    <div className={styles.text} style={{borderBottom: isBorder ? '1px solid #dfdfdf' : ''}} >
      <Link to="/detalhenoticia">
        <h3>{titulo}</h3>
        <p>{descricao ? descricao : ''}</p>
      </Link>
    </div>
  )
}
export default TituloDescricao