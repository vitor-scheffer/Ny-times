import styles from './Footer.module.css'
import Lista from './Lista'
import Subscribe from './Subscribe'
import AsideNav from './AsideNav'

const FullNavFooter = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.mainFooter}>
      <Lista news="NEWS" opinion="OPINION" arts="ARTS" living="LIVING" more="MORE"/>
    </nav>
    <div className={styles.asideFooter}>
    <nav>
      <Subscribe subscribe="SUBSCRIBE"/>
    </nav>
    <nav>
      <AsideNav />
    </nav>
    </div>
    </div>
    
  )
}
export default FullNavFooter