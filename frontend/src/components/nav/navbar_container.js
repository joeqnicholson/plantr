import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    userId: state.session.userId
  };
};

export default connect(mapStateToProps, { logout })(NavBar);