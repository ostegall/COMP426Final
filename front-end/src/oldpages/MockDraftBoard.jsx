import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'
import "../styles.css"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import * as d3 from 'd3';
// import player_data from '../data2.csv'
import { local } from 'd3'

const Wrapper = styled.div`
    padding: 0 80px 80px 162.5px;
`

class MockDraftBoard extends Component {
    constructor(props) {
        super(props)
        let teamNeeds = new Map()
        teamNeeds.set("49ers", {needs: ["EDGE", "IOL", "CB"], picks: [3]})
        teamNeeds.set("Bears", {needs: ["OT", "WR", "CB"], picks: [20]})
        teamNeeds.set("Bengals", {needs: ["OT", "TE", "IOL"], picks: [5]})
        teamNeeds.set("Bills", {needs: ["RB", "CB", "WR"], picks: [30]})
        teamNeeds.set("Broncos", {needs: ["LB", "IOL", "IDL", "WR"], picks: [9]})
        teamNeeds.set("Browns", {needs: ["IDL", "WR", "EDGE"], picks: [26]})
        teamNeeds.set("Buccaneers", {needs: ["WR", "IOL", "IDL"], picks: [32]})
        teamNeeds.set("Cardinals", {needs: ["IOL", "CB", "WR"], picks: [16]})
        teamNeeds.set("Chargers", {needs: ["EDGE", "CB", "S"], picks: [13]})
        teamNeeds.set("Chiefs", {needs: ["WR", "LB", "IOL", "OT"], picks: []})
        teamNeeds.set("Colts", {needs: ["OT", "CB", "WR"], picks: [21]})
        teamNeeds.set("Cowboys", {needs: ["OT", "CB", "EDGE", "TE"], picks: [10]})
        teamNeeds.set("Dolphins", {needs: ["RB", "LB", "IOL", "OT"], picks: [6, 18]})
        teamNeeds.set("Eagles", {needs: ["TE", "CB", "S"], picks: [12]})
        teamNeeds.set("Falcons", {needs: ["EDGE", "CB", "OT"], picks: [4]})
        teamNeeds.set("Giants", {needs: ["LB", "CB", "WR"], picks: [11]})
        teamNeeds.set("Jaguars", {needs: ["OT", "WR", "S"], picks: [1, 25]})
        teamNeeds.set("Jets", {needs: ["EDGE", "CB", "RB"], picks: [2, 23]})
        teamNeeds.set("Lions", {needs: ["CB", "WR"], picks: [7]})
        teamNeeds.set("Packers", {needs: ["OT", "IDK", "WR", "LB"], picks: [29]})
        teamNeeds.set("Panthers", {needs: ["OT", "LB", "TE", "IOL"], picks: [8]})
        teamNeeds.set("Patriots", {needs: ["LB", "WR", "CB"], picks: [15]})
        teamNeeds.set("Raiders", {needs: ["LB", "IDL", "S"], picks: [17]})
        teamNeeds.set("Rams", {needs: ["OT", "IOL", "TE", "LB", "EDGE"]})
        teamNeeds.set("Ravens", {needs: ["OT", "S", "WR"], picks: [27, 31]})
        teamNeeds.set("Saints", {needs: ["LB", "WR", "CB"], picks: [28]})
        teamNeeds.set("Seahawks", {needs: ["EDGE", "OT", "CB"]})
        teamNeeds.set("Steelers", {needs: ["OT", "IOL", "CB"], picks: [24]})
        teamNeeds.set("Texans", {needs: ["IDL", "WR", "CB", "IOL", "TE", "EDGE"]})
        teamNeeds.set("Titans", {needs: ["WR", "OT", "TE", "S"], picks: [22]})
        teamNeeds.set("Vikings", {needs: ["IOL", "EDGE", "CB"], picks: [14]})
        teamNeeds.set("Washington", {needs: ["OT", "S", "CB"], picks: [19]})
        this.state = {
            // picks: [],
            enabled: [
                true, true, true, true, true, true, true, true, true, true, 
                true, true, true, true, true, true, true, true, true, true, 
                true, true, true, true, true, true, true, true, true, true, 
                true, true, true, true, true, true, true, true, true, true, 
                true, true, true, true, true, true, true, true, true, true
            ],
            teamNeedsMap: teamNeeds,
            teamOrder: [
                "N/A", "Jaguars", "Jets", "49ers", "Falcons", "Bengals", "Dolphins",
                "Lions", "Panthers", "Broncos", "Cowboys", "Giants", "Eagles", "Chargers",
                "Vikings", "Patriots", "Cardinals", "Raiders", "Dolphins", "Washington", "Bears",
                "Colts", "Titans", "Jets", "Steelers", "Jaguars", "Browns", "Ravens", "Saints",
                "Packers", "Bills", "Ravens", "Buccaneers"
            ],
            index: 1
        }
        this.renderRow = this.renderRow.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        // this.pickPlayer = this.pickPlayer.bind(this)
    }

    componentDidMount() {   
        var temp = localStorage.getItem('teams')
        var teams = JSON.parse(temp)
        if (teams === null) {
            this.props.history.push("mockdraft")
            return
        }
        var picks = []
        teams.forEach(team => {
            var teamInfo = this.state.teamNeedsMap.get(team)
            teamInfo.picks.forEach(pick => {
                picks.push(pick)
            })
        })
        localStorage.setItem('picks', JSON.stringify(picks))
    }

    renderRow(props) {   
        
        const {index, style} = props

        // d3.csv(player_data).then(function(data){
        //     localStorage.setItem('name'+index,data[index].Name)
        //     localStorage.setItem('position'+index,data[index].Position)
        //     localStorage.setItem('school'+index,data[index].School)
        // })

        return (
            <button onClick={this.handleClick} style={style} id={index} disabled={!this.state.enabled[index]}>
              {`${index + 1}. `+localStorage.getItem('name'+index)+' '+localStorage.getItem('position'+index)+' '+localStorage.getItem('school'+index)}
            </button>
          );
        
      }
    
    handleClick(e) {
        e.preventDefault()

        var button = e.target
        var index = button.id
        alert(button.textContent)
        var oldEnabled = this.state.enabled
        oldEnabled[index] = false
        this.setState({
            enabled: oldEnabled
        })
        button.disabled = true
    }

    // pickPlayer(i) {
    //     //
    // }

    handleButtonClick(e) {
        e.preventDefault()

        var teams = JSON.parse(localStorage.getItem('teams'))
        var picks = JSON.parse(localStorage.getItem('picks'))

        
    }

    render() {
        return (
            <div>
                <NavBar>

                </NavBar>
                <Wrapper>
                <h1>
                  Take your pick!
                </h1>
                    <FixedSizeList height={2250} width={1112} itemSize={45} itemCount={50} overflow={0}>
                        {this.renderRow}
                    </FixedSizeList>
                    <div>
                        <button onClick={this.handleButtonClick} className={"submit"}>
                            Start Draft
                        </button>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default MockDraftBoard