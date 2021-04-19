import React from 'react'
import Login from './Login.js'
import Sensors from './Sensors.js'

/**
 * A class Users for users to login. If the user is authenticaed, they can update or view Content Titles and details.
 */
class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"authenticated":false, "email":"", "password":""}
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    state = {"authenticated":false, "email":"", "password":""}
    loginCallback = (data) => {
    console.log(data)
    if (data.status === 200) {
    this.setState({"authenticated":true, "token":data.token})
    localStorage.setItem('myToken', data.token);
}
}

    updateCallback = (data) => {
        console.log(data)
        if (data.status !== 200) {
            this.setState({"authenticated":false})
            localStorage.removeItem('myToken');
        }
    }

postData = (url, myJSON, callback) => {
    fetch(url, {   method: 'POST',
        headers : new Headers(),
        body:JSON.stringify(myJSON)})
        .then( (response) => response.json() )
.then( (data) => {
        callback(data)
    })
.catch ((err) => {
        console.log("something went wrong ", err)
    }
);
}

componentDidMount() {
    if(localStorage.getItem('myToken')) {
        this.setState({"authenticated":true});
    }
}

handleLoginClick = () => {
    const url = "http://unn-w18013241.newnumyspace.co.uk/kf6012/team/api/login"
    let myJSON = {"email":this.state.email, "password":this.state.password}
    this.postData(url, myJSON, this.loginCallback)
}


handlePassword = (e) => {
    this.setState({password:e.target.value})
}
handleEmail = (e) => {
    this.setState({email:e.target.value})
}

handleLogoutClick = () => {
    this.setState({"authenticated":false})
    localStorage.removeItem('myToken');
}

render() {
    let page = <Login handleLoginClick={this.handleLoginClick} email={this.state.email} password={this.state.password} handleEmail={this.handleEmail} handlePassword={this.handlePassword}/>
    if (this.state.authenticated) {
        page = <div>
        <button onClick={this.handleLogoutClick}>Log out</button>
        </div>
    }

    return (
        <div>
        <h1>Login</h1>
    {page}
</div>
);
}
}

export default Users;