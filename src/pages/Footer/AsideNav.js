import styles from './Footer.module.css'

const AsideNav = () => {
  return (
    <ul className={styles.asideNav}>
      <li>
        <a href="#"><small>Mobile Applications</small></a>
        
      </li>
      <li>
        <a href="#"><small>Replica Edition</small></a>
        
      </li>
      <li>
        <a href="#"><small>International</small></a>
       
      </li>
      <li>
        <a href="#"><small>Canada</small></a>
        
      </li>
      <li>
        <a href="#"><small>Español</small></a>
        
      </li>
      <li>
        <a href="#"><small>中文网</small></a>
        
      </li>
    </ul>
  )
}
export default AsideNav