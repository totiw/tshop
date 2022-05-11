import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
  return (
      <>
          <nav>
            <div className="container">
                <div className="brand">Tshop</div>
                <div className="links">
                    <a href="/products" className="nav-link">Products</a>
                    <a href="/dropshiper" className="nav-link">Dropshiper</a>
                    <a href="/categories" className="nav-link">Categories</a>
                    <a href="/contact" className="nav-link">Contact</a>
                </div>
                <div className="users">
                    <a href="/signup" className="nav-link">Sign Up</a>
                    <a href="/login" className="nav-link">Login</a>
                </div>
                <div className="searchbar">
                    <input type="search" name="search" id="search" />
                    <span><FontAwesomeIcon icon={faSearch} className="search-icon" /></span>
                    <span><FontAwesomeIcon icon={faBars} className="hamburger-menu" onClick={toggleClass} /></span>
                </div>
            </div>

            <div className={'mobile-menu ' + (isActive ? 'active' : '')}>
                <a href="/products" className="nav-link">Products</a>
                <a href="/dropshiper" className="nav-link">Dropshiper</a>
                <a href="/categories" className="nav-link">Categories</a>
                <a href="/contact" className="nav-link">Contact</a>
                <div className="users-mobile">
                    <a href="/signup" className="nav-link">Sign Up</a>
                    <a href="/login" className="nav-link">Login</a>
                </div>
            </div>
          </nav>
      </>
  )
}

export default Navbar