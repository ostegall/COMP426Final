import React, { Component } from 'react'
// import login from '../login'
import styled from 'styled-components'
import { Button } from "react-bootstrap";
import { LogInNavBar } from "../components/"
// import axios from "axios";

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

// const options = {
//     method: 'GET',
//     url: 'https://dad-jokes.p.rapidapi.com/random/joke',
//     headers: {
//       'x-rapidapi-key': 'c488991181mshe2956f9ff584774p152d44jsn6f2757c1e059',
//       'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
//     }
//   };

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameUpdate = this.usernameUpdate.bind(this);
        this.passwordUpdate = this.passwordUpdate.bind(this);
    
        this.state = {
          username: "",
          password: "",
        //   redirect: false,
          message: "",
        //   user: JSON.parse(localStorage.getItem('user'))
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
            for(var i = 0; i < data.data.length; i++) {
                if (data.data[i].name === this.state.username && data.data[i].password === this.state.password) {
                    // console.log('Success:', data.data[i]);
                    localStorage.setItem("user", JSON.stringify(data.data[i]._id))
                    this.setState({
                        redirect: true,
                        user: JSON.parse(localStorage.getItem('user'))
                    })
                    this.props.history.push("/game");
                    break
                } else {
                    var p = document.getElementById('error')
                    p.innerText = "Unable to log in"
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error)
            var p = document.getElementById('error')
            p.innerText = "Unable to log in"
        })

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }

    usernameUpdate(e) {
        this.setState({
            username: e.target.value
          });
    }

    passwordUpdate(e) {
        this.setState({
            password: e.target.value
          });    }

    render() {
        // if (this.state.user == null) {
            return (
                <div>
                    <div>
                        <LogInNavBar>

                        </LogInNavBar>
                    </div>
                    <Wrapper>
                    <div>
                        <div>
                            <h2>Login</h2>
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
                                        {/* <Button variant="btn btn-success" href="/createaccount">Create Account</Button> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div>
                            <p id="error" style={{color:"red"}}></p>
                        </div>
                    </div>
                </Wrapper>
            </div>
            )
        // } else {
            // const redirectToReferrer = this.state.redirect;
            // if (redirectToReferrer === true) {
                
                // return(
                //     <div></div>
                // );
            // }
        // }
    }
}

export default Login