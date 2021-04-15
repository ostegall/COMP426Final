import React, { Component } from 'react'
// import login from '../login'
import styled from 'styled-components'
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameUpdate = this.usernameUpdate.bind(this);
        this.passwordUpdate = this.passwordUpdate.bind(this);
    
        this.state = {
          username: "",
          password: "",
          redirect: false,
          message: ""
        };
      }

    handleSubmit(e) {
        e.preventDefault()

        // const user = JSON.parse(localStorage.getItem('user'))

        const getURL = "http://localhost:9000/login/get/"
        fetch(getURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            for(var i = 0; i < data.data.length; i++) {
                if (data.data[i].name === this.state.username && data.data[i].password === this.state.password) {
                    this.setState({
                        redirect: true
                    })
                    break
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    usernameUpdate(e) { // Dealing with username field changes to update state
        this.setState({
            username: e.target.value
          });
    }

    passwordUpdate(e) { // Dealing with password field changes to update state
        this.setState({
            password: e.target.value
          });    }

    render() {
        const redirectToReferrer = this.state.redirect;
        if (redirectToReferrer === true) {
            this.props.history.push("/mockdraft");
        }
        return (
            <Wrapper>
            <div>
                <div>
                    <h1>Login</h1>
                </div>

                <div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username:</label>
                            <input required onChange={this.usernameUpdate}></input>
                            <label>Password</label>
                            <input required type="password" onChange={this.passwordUpdate}></input>
                            <div>
                                <Button variant="primary" type="submit">Login</Button>
                                <Button variant="btn btn-success" href="/createaccount">Create Account</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
        )
    }
}

export default Login