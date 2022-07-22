import styles from './Footer.module.css';

const BottomNav = () => {
  return (
    <ul className={styles.bottomNav}>
      <li>
        <a href="#">
          <small>© 2022 The New York Times Company</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>NYTCo</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Contact Us</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Accessibility</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Work with us</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Advertise</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>T Brand Studio</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Your Ad Choices</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Privacy Policy</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Terms of Service</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Terms of Sale</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Site Map</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Help</small>
        </a>
      </li>
      <li>
        <a href="#">
          <small>Subscriptions</small>
        </a>
      </li>
    </ul>
  )
}
export default BottomNav