import React, { Component }from 'react'
import { Button } from 'react-bootstrap'
// import login from '../login'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

class CreateAccount extends Component {

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

    usernameUpdate(e) { // Dealing with username field changes to update state
        this.setState({
            username: e.target.value
          });
    }

    passwordUpdate(e) { // Dealing with password field changes to update state
        this.setState({
            password: e.target.value
          });    }
    
    handleSubmit(e) { // Once the form has been submitted, this function will post to the backend
        e.preventDefault()
        
        const postURL = "http://localhost:9000/login/newUser/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: this.state.username,
                password: this.state.password,
                oldmocks: []
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem("user", JSON.stringify(data))
            this.setState({
                redirect: true
            })
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    render() {
        const redirectToReferrer = this.state.redirect;
        if (redirectToReferrer === true) {
            this.props.history.push("/login");
        }
        return (
            <Wrapper>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input required onChange={this.usernameUpdate}></input>
                    <label>Password</label>
                    <input required type="password" onChange={this.passwordUpdate}></input>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
            </Wrapper>
        )
    }
}

export default CreateAccount