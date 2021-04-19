import React from 'react'

/**
 * A Login class that generates a text box and a button for the user to insert their details
 */
class Login extends React.Component {

    render() {
        return (
            <div>
            <input
        type='text'
        placeholder='email'
        value={this.props.email}
        onChange={this.props.handleEmail}
        />
        {<br />}

        <input
        type='password'
        placeholder='password'
        value={this.props.password}
        onChange={this.props.handlePassword}
        />
        {<br />}

        <button onClick={this.props.handleLoginClick}>Log in</button>
            </div>
    );
    }
}

export default Login;
