import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'

const Header = () => (
  <header className="container">
    <Link to="/"><Logo /></Link>
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header