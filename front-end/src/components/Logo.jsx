import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../tic-tac-toe.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src={logo} width="50" height="50" />
            </Wrapper>
        )
    }
}

export default Logo