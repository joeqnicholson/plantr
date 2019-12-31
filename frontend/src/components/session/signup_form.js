import React from 'react';
import { withRouter } from 'react-router-dom';
import '../session.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return event => this.setState({[field]: event.currentTarget.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

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
        <div className="image-background">
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <div class='session-title'>Sign Up</div>
              <input class='input-session'type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input class='input-session'type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
              <br />
              <input class='input-session'type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input class='input-session'type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              <br />
              <input class='input-session-submit'type="submit" value="Join" />
              {this.handleErrors()}

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);