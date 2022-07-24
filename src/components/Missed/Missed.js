import styles from './Missed.module.css';
import { Link } from 'react-router-dom';

const Missed = ({missed, isBorder}) => {
  const missedExists = Object.keys(missed).length > 0;

  return (
    <>
    {missedExists ? (
      <>
      <Link to={`/detalhenoticia/${missed[0].title}/${missed[0].abstract}`}>
      <div className={styles.flexContainer} style={{borderBottom: isBorder ? '1px solid #dfdfdf' : '' }}>
        <h3>{missed[0].title}</h3>
        <img src={missed[0].multimedia[2].url} alt="" />
      </div>
      </Link>
      </>
    ) : (<div></div>) }
    
    
    </>
  )
}
export default Missed