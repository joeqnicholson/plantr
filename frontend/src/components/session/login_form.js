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
    this.demoLogin = this.demoLogin.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidUpdate(nextProps) {
    // Set or clear errors
    if (this.state.errors !== nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
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

  demoLogin(event) {
    event.preventDefault();

    this.props.login({
      email: "frida@kahlo.com",
      password: "test123"
    })
  }

  // render the session errors if there are any
  handleErrors() {
    return (
      <ul className="session-errors-ul">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="session-error-li" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let errorsKlass = Object.keys(this.state.errors).length ? " expand" : null;

    return (
      <div className="signup-form-container">
        <div className="image-background">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br />
              <div className="session-title">Log In</div>
              <input
                className="input-session"
                type="text"
                autoComplete="username"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="input-session"
                type="password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <div className={`session-errors${errorsKlass}`}>{this.handleErrors()}</div>
              <input
                className="input-session-submit"
                type="submit"
                value="Log In"
              />
              <input
                onClick={this.demoLogin}
                className="input-session-submit"
                type="submit"
                value="Demo User"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

