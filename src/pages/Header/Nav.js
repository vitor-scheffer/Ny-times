import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ciencia">Science</Link>
          <Link to="/tecnologia">Tech</Link>
          <Link to="/mundo">World</Link>
          <Link to="/saude">Health</Link>
          <Link to="/politica">Politics</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav