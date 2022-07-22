import Nav from './Nav'
import FullNavFooter from './FullNavFooter'
import Title from '../../images/theNewYorkTimes.svg'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer>
      <div className={styles.line}></div>
      <div>
        <img src={Title} alt="Logo The New York Times" />
      </div>
      <FullNavFooter />
      <Nav />
    </footer>
    
  )
}
export default Footer