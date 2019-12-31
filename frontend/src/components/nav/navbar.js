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
          <Link to={'/plants'}>All Plants</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div class='signup-login-pompts'>
          <Link class='signup'to={'/signup'}>Signup</Link>
          <Link class='signup'to={'/login'}>Login</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div class='navbar'>
        <link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"/>
        <div class='plantr-text-logo'></div>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;