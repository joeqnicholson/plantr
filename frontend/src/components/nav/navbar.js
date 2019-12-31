import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(event) {
    event.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/plants'} class='signup'>All Plants</Link>
          <button onClick={this.logoutUser} class='signout'>logout</button>
        </div>
      )
    } else {
      return (
        <div class='signup-login-pompts'>
          <Link class='signup'to={'/signup'}>join</Link>
          <Link class='signup'to={'/login'}>login</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div class='navbar'>
        <div class='plantr-text-logo'>plantr</div>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;