import styles from './Footer.module.css'

const Subscribe = ({subscribe}) => {
  return (
    <ul className={styles.subscribe}>
      <h3>{subscribe}</h3>
      <li>
        <a href="#">Home Delivery</a>
      </li>
      <li>
        <a href="#">Digital Subscriptions</a>
      </li>
      <li>
        <a href="#">Games</a>
      </li>
      <li>
        <a href="#">Cooking</a>
      </li>
      <li>
        <a href="#"><small>Email Newsletters</small></a>
      </li>
      <li>
        <a href="#"><small>Corporate Subscriptions</small></a>
      </li>
      <li>
        <a href="#"><small>Education Rate</small></a>
      </li>
    </ul>
  )
}
export default Subscribe