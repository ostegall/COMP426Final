import React, { Component } from 'react'

import styled from 'styled-components'

import { NavBar } from '../components'

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

class OldMocks extends Component {
    render() {
        return (
            <div>
                <NavBar >
                
                </NavBar>
                <Wrapper>
                <div>
                    <p>Here you'll see the Old Mock Drafts</p>
                </div>
                </Wrapper>
            </div>
        )
    }
}

export default OldMocks