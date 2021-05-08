import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from "react-bootstrap";
import { NavBar } from '../components'

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedOut: false,
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        localStorage.removeItem('user')
        this.setState({
            loggedOut: true,
        })
    }

    render() {
        const loggedOut = this.state.loggedOut;
            if (loggedOut === true) {
                this.setState({
                    loggedOut: false
                })
                this.props.history.push("/");
            }
        return (
            <div>
            <div>
                <NavBar>
                    
                </NavBar>
            </div>
            <Wrapper>
                <div>
                    <div>
                        <h2>Logout</h2>
                        <Button variant="primary" onClick={this.handleLogout} type="submit">Logout</Button>
                    </div>  
                </div>  
            </Wrapper>
            </div>
        )
    }
}

export default Settings