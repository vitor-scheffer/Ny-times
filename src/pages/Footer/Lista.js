import {Link} from 'react-router-dom'

const Lista = ({news, opinion, arts, living, more}) => {
  return (
    <>
    <ul>
      <h3>{news}</h3>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mundo">World</Link>
      </li>
      <li>
        <a href="#">Coronavirus</a>
      </li>
      <li>
        <a href="#">U.S.</a>
      </li>
      <li>
        <Link to="/politica">Politics</Link>
      </li>
      <li>
        <a href="#">New York</a>
      </li>
      <li>
        <a href="#">Business</a>
      </li>
      <li>
        <Link to="/tecnologia">Tech</Link>
      </li>
      <li>
        <Link to="/ciencia">Science</Link>
      </li>
      <li>
        <a href="#">Sports</a>
      </li>
      <li>
        <a href="#">Wildfire Tracker</a>
      </li>
      <li>
        <a href="#">Obituaries</a>
      </li>
      <li>
        <a href="#">Today's Paper</a>
      </li>
      <li>
        <a href="#">Corrections</a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li> 
    </ul>

    <ul>
      <h3>{opinion}</h3>
      <li>
        <a href="#">Today's Opinion</a>
      </li>
      <li>
        <a href="#">Columnists</a>
      </li>
      <li>
        <a href="#">Editorial</a>
      </li>
      <li>
        <a href="#">Guest Essays</a>
      </li>
      <li>
        <a href="#">Letters</a>
      </li>
      <li>
        <a href="#">Sunday Opinion</a>
      </li>
      <li>
        <a href="#">Opinion Video</a>
      </li>
    </ul>

    <ul>
      <h3>{arts}</h3>
      <li>
        <a href="#">Today's Arts</a>
      </li>
      <li>
        <a href="#">Art &amp; Design</a>
      </li>
      <li>
        <a href="#">Books</a>
      </li>
      <li>
        <a href="#">Best Selelrs Book List</a>
      </li>
      <li>
        <a href="#">Dance</a>
      </li>
      <li>
        <a href="#">Movies</a>
      </li>
      <li>
        <a href="#">Music</a>
      </li>
      <li>
        <a href="#">Pop Culture</a>
      </li>
      <li>
        <a href="#">Television</a>
      </li>
      <li>
        <a href="#">Theater</a>
      </li>
      <li>
        <a href="#">Video: Arts</a>
      </li>
    </ul>

    <ul>
      <h3>{living}</h3>
      <li>
        <a href="#">Automotive</a>
      </li>
      <li>
        <a href="#">Games</a>
      </li>
      <li>
        <a href="#">Education</a>
      </li>
      <li>
        <a href="#">Food</a>
      </li>
      <li>
        <Link to="/saude">Health</Link>
      </li>
      <li>
        <a href="#">Jobs</a>
      </li>
      <li>
        <a href="#">love</a>
      </li>
      <li>
        <a href="#">Magazine</a>
      </li>
      <li>
        <a href="#">Parenting</a>
      </li>
      <li>
        <a href="#">Real State</a>
      </li>
      <li>
        <a href="#">Style</a>
      </li>
      <li>
        <a href="#">T Magazine</a>
      </li>
      <li>
        <a href="#">Travel</a>
      </li>
    </ul>

    <ul>
      <h3>{more}</h3>
      <li>
        <a href="#">Reader Center</a>
      </li>
      <li>
        <a href="#">The Athletic</a>
      </li>
      <li>
        <a href="#">Wirecutter</a>
      </li>
      <li>
        <a href="#">Cooking</a>
      </li>
      <li>
        <a href="#">Headway</a>
      </li>
      <li>
        <a href="#">Live Events</a>
      </li>
      <li>
        <a href="#">The Learning Network</a>
      </li>
      <li>
        <a href="#">Tools &amp; Services</a>
      </li>
      <li>
        <a href="#">Podcasts</a>
      </li>
      <li>
        <a href="#">Video</a>
      </li>
      <li>
        <a href="#">TimesMachine</a>
      </li>
      <li>
        <a href="#">NYT Store</a>
      </li>
      <li>
        <a href="#">Manage My Account</a>
      </li>
      <li>
        <a href="#">NYTLicensing</a>
      </li>
    </ul>
    </>
    
  )
}
export default Lista