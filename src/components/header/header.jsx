import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import { auth } from '../../firebase/firebase-utils'

const Header = ({ currentUser }) => (
  <header className="container">
    <Link to="/"><Logo /></Link>
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        {
          currentUser ? 
          <li className="nav-item"><Link className="nav-link" onClick={() => auth.signOut()} to="">Sign Out</Link></li>
          : <li className="nav-item"><Link  className="nav-link" to="/sign-in">Sign In</Link></li>
        }
      </ul>
    </nav>
  </header>
)

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Header)