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
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>plantr</h1>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;