import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'
import "../styles.css"

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
` 

class MockDraft extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     myArray: []
        // }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        localStorage.removeItem('teams')
    }

    handleToggle(e) {
        e.preventDefault()

        const button = e.target

        if (button.className === "unclicked") {
            button.className = "clicked"
        } else if (button.className === "clicked") {
            button.className = "unclicked"
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        var teams = document.getElementsByClassName("clicked")
        var temp = []

        for (var i = 0; i < teams.length; i++) {
            temp = [...temp, teams[i].textContent]
        }

        // this.setState(prevState => ({
        //     myArray: [...prevState.myArray, ...temp]
        // }))

        // if (localStorage.getItem('teams') === null) {
            localStorage.setItem('teams', JSON.stringify(temp))
        // }

        this.props.history.push("/mockdraft-board");
    }

    render() {
        return (
            <div>
                <NavBar >
                
                </NavBar>
                <Wrapper>
                <div>
                    <div>
                    <h1>Pick which team(s) you want to draft as in the first round!</h1>
                    <form onSubmit={this.handleSubmit}>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/77uRRAjdCHXPE4c3z1p27u/2e08d1d39713cd55308c80e6c27fefcf/San_Francisco_49ers_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                49ers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/0mjgpjlyQwYerTzgVZjRH/0e884fdd9c8796a7e50170c1ab9312ad/Chicago_Bears_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Bears
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5HzwPteBJq49hezhZH4CYc/dca0a5d3f07695a3d3604d241d68478e/Cincinnati_Bengals_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Bengals
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7a7EtMPE1BxZoEhx8SolDq/04354e6e0b7e8ddefbecbe2072155503/Buffalo_Bills_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Bills
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/6cXHy2wu59pWnWPjRrbVcb/d8bfeb455b33324e46f8403f50f0a953/Denver_Broncos_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Broncos
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7xgGSyqNqacFKqfYlNHLOT/31069bc200e95fa2d3151914646d5e29/Cleveland_Browns_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Browns
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/58C0PykOrz8FWhLQHpagEH/3025e9ee5974a09a2552c5f939048fac/Tampa_Bay_Buccaneers_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Buccaneers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/4bs2ZSn5vhyGgpMySHFhDo/52da0cafe7c9a7ff470292fdd7fd2418/Arizona_Cardinals_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Cardinals
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/epHAx9wanlYuERUELM0fH/c29c70b811a7e73ac96265a838950b0f/chargers.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Chargers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/4ezJXIaThKynYVyyB0Mtgp/81669c984ec633c9b9d1d2d259692a0b/Kansas_City_Chiefs_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Chiefs
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5croLNmWxwLBAFzOIgcNNK/9d7fdd4516038a7ac3e3b078f6725816/Indianapolis_Colts_logo.svg.png" style={{width:"25px", height:"20px"}} alt="">
                                    
                                </img>
                                Colts
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/Dp95dsse3mLTRB4Wjp74r/7767ad70079ac4ecb4eb39ba971ecedb/Dallas_Cowboys.svg.png" style={{width:"25px", height:"20px"}} alt="">
                                    
                                </img>
                                Cowboys
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7fHYqm0BoXtx4clWQ7MQ46/46b576ef3891be999a9c576284816da5/Miami_Dolphins_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Dolphins
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/6TZvlwV4EJgNrLDhTcNuH9/10caa59b9bdd14ddbe962505a8f87c90/Philadelphia_Eagles_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Eagles
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5DWXnb1wfKu385kWvTkyip/f400eff756622dee5225419666949893/Atlanta_Falcons_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Falcons
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7Iw5fZFGQz4SE4SEYxenLY/c2e0b1c7ae847717b97305b02f12e278/New_York_Giants_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Giants
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/3C3LkUsgEfCyhPpC2KZ1Fk/300bc4187dbb199cf02d24d185b36f09/Jacksonville_Jaguars_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Jaguars
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/2BLBhjpD98az2zMLNo4qV2/d7ab14dd8e9076a1b13bb7f9f9a48ef1/jets.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Jets
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/2fHnMx5NtJOfI1g1671hVi/b38062a7cc383eac0f2292a123985ca7/Detroit_Lions_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Lions
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5htusO7C6AxxZSdVXX8pYQ/50f8e1edc425d5fe59f2ae618fd8fc76/Green_Bay_Packers_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Packers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/2hj0Wh1Wl73bsc1PzryC0g/20fa8400ba640bb50cb77b4b785ac3d5/Carolina_Panthers_logo.svg.png" style={{width:"30px", height:"18px"}} alt="">
                                    
                                </img>
                                Panthers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5j7a9Aoxu2i7IJeyq1Eabd/c8d6777798f073bba0b1e02047d53fb8/New_England_Patriots_logo.svg.png" style={{width:"33px", height:"18px"}} alt="">
                                    
                                </img>
                                Patriots
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7gNlWn4WcKx9foCbQYVqHw/ab2b4d1fd97f3951b023a126612a918d/Oakland_Raiders_logo.svg.png" style={{width:"23px", height:"23px"}} alt="">
                                    
                                </img>
                                Raiders
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/4fMpAr9dfqgmXTuyQyhyFk/1963ecca7c68128ebdbef870b5a78522/rams.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Rams
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7oM7X7WBjdyyhqOjlUIV1n/ec8e49ed56e618afc5996ec544499c37/Baltimore_Ravens_logo.svg.png" style={{width:"33px", height:"18px"}} alt="">
                                    
                                </img>
                                Ravens
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/78OZ2EEkFrbGvZhkmd9CQ8/93b571b13660a6134e08fde73e58c4da/New_Orleans_Saints_logo.svg.png" style={{width:"25px", height:"22px"}} alt="">
                                    
                                </img>
                                Saints
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5ZjO8kosAvWmGy2V4ONdvD/f0b7d5b0425cc8a2ebfd7dae241fb657/Seattle_Seahawks_logo.svg.png" style={{width:"33px", height:"18px"}} alt="">
                                    
                                </img>
                                Seahawks
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/3czQlLgd4eUppylgwDqied/1e8ded1270d9bfcd423c4e17b9667c04/Pittsburgh_Steelers_logo.svg.png" style={{width:"20px", height:"18px"}} alt="">
                                    
                                </img>
                                Steelers
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/ypGYS4yz9VCNcvlCtOFxr/2e59bb5de6e4c606324151e68ef30a2f/Houston_Texans_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Texans
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/7JYFGhvlThb6QfVeaJjb1s/b42b879036c04b83714a178ead2d19a8/Tennessee_Titans_logo.svg.png" style={{width:"27px", height:"18px"}} alt="">
                                    
                                </img>
                                Titans
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/6V5alMtcu5R4YUlpPCWfMX/93b6b8bbf72cbf3e7eea02f69caadbed/Minnesota_Vikings_logo.svg.png" style={{width:"20px", height:"18px"}} alt="">
                                    
                                </img>
                                Vikings
                            </button>
                            <button onClick={this.handleToggle} className={"unclicked"}>
                                <img src="https://images.ctfassets.net/2fsertgrdoba/5CQwlW1XUTGzX1N5TGyU51/535e69f41397626f19e9564a1e0c6dac/washington_logo.png" style={{width:"20px", height:"18px"}} alt="">
                                    
                                </img>
                                Washington
                            </button>
                            <button onClick={this.handleSubmit} className={"submit"}>
                                Next
                            </button>
                        </form>
                    </div>
                </div>
                </Wrapper>
            </div>
        )
    }
}

export default MockDraft