import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.props.history.push('/');
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className='nav-stuff'>
          <div className='plantr-text-logo'>plantr</div>
          <Link to={'/plants'} className='signup'>All Plants</Link>
          <Link to={`/garden/${this.props.currentUser.id}`} className='signup'>Garden</Link>
          <button onClick={this.logoutUser} className='signout'>logout</button>
        </div>
      )
    } else {
      return (
        <div className='nav-stuff'>
          <div className='plantr-text-logo'><Link className='plantr-text-logo'to={'/'}>plantr</Link>
</div>
          <div className='nav-prompts'>
            <Link className='signup'to={'/signup'}>Signup</Link>
            <Link className='signup'to={'/login'}>Login</Link>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='navbar'>
        {/* <div className='plantr-text-logo'>plantr</div> */}
        { this.getLinks() }
      </div>
    )
  }
}

export default withRouter(NavBar);