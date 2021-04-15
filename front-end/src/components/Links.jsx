import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/mockdraft" className="navbar-brand">
                    OS Mock Draft Sim
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/oldmocks" className="nav-link">
                                Old Mocks
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/settings" className="nav-link">
                                Settings
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links