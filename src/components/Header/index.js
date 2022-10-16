import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Doctor Consultation</h1>
      <ul className="nav-menu">
        <li className="item">
          <Link to="/">Home</Link>
        </li>

        <li className="item">
          <Link to="profile">Profile</Link>
        </li>

        <li className="item">
          <Link to="appointment">Appointment</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
