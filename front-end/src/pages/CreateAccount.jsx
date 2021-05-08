import React, { Component }from 'react'
import { Button } from 'react-bootstrap'
// import login from '../login'
import styled from 'styled-components'
import { LogInNavBar } from '../components'

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
        //   redirect: false,
          message: "",
        //   user: JSON.parse(localStorage.getItem('user'))
        };
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
    
    handleSubmit(e) {
        e.preventDefault()
        
        var email = this.state.username

        fetch("https://zerobounce1.p.rapidapi.com/v2/validate?email="+email+"&ip_address=", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c488991181mshe2956f9ff584774p152d44jsn6f2757c1e059",
                "x-rapidapi-host": "zerobounce1.p.rapidapi.com",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            const postURL = "http://localhost:9000/login/newUser/"
            fetch(postURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.username,
                    password: this.state.password,
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                this.props.history.push("/game");
                localStorage.setItem("user", JSON.stringify(data.id))
                // this.setState({
                //     user: JSON.parse(localStorage.getItem('user')),
                //     redirect: true
                // })
            })
            .catch((error) => {
                var p = document.getElementById('error')
                p.innerText = "Unable to create account"
                console.error('Error:', error)
            })
        })
        .catch(err => {
            var p = document.getElementById('error')
            p.innerText = "Unable to create account due to poorly formatted email"
            console.error("Error:", err);
        });
    }

    render() {
        // const redirectToReferrer = this.state.redirect;
        // if (redirectToReferrer === true) {
        //     this.props.history.push("/login");
        // }
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
                    <h2>Create Account</h2>
                </div>
                <div>
                <form onSubmit={this.handleSubmit} autoComplete={"on"}>
                    <label>Username:</label>
                    <input required onChange={this.usernameUpdate}></input>
                    <label>Password</label>
                    <input required type="password" onChange={this.passwordUpdate}></input>
                    <div>
                    <Button type="submit">Submit</Button>
                    </div>
                </form>
                </div>
                <div>
                    <p id="error" style={{color:"red"}}> </p>
                </div>
            </div>
            </Wrapper>
            </div>
        )
        // } else {
        //     this.props.history.push("/mockdraft");
        //         return(
        //             <div></div>
        //         );
        // }
    }
}

export default CreateAccount