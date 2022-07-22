import styles from './Footer.module.css'
import food from '../../images/food.svg'
import flag from '../../images/flag.svg'
import papper from '../../images/papper.svg'
import nytimes from '../../images/nytimes.svg'

const Subscribe = ({subscribe}) => {
  return (
    <div className={styles.subscribe}>
    <ul>
      <h3>{subscribe}</h3>
      <li>
        <a href="#"><img src={papper} alt="" /> Home Delivery</a>
      </li>
      <li>
        <a href="#"><img src={nytimes} alt="" /> Digital Subscriptions</a>
      </li>
      <li>
        <a href="#"><img src={flag} alt="" /> Games</a>
      </li>
      <li>
        <a href="#"><img src={food} alt="" /> Cooking</a>
      </li>
    </ul>
    <ul>
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
    </div>
    
  )
}
export default Subscribe