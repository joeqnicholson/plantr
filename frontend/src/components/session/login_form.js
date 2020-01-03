import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Plants page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/plants');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // render the session errors if there are any
  handleErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className='image-background'>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <div class='session-title'>Log In</div>
              <input class='input-session'type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input class='input-session'type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input class='input-session-submit'type="submit" value="Log In" />
              {this.handleErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

