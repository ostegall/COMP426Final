import React, { cloneElement } from 'react' 
import '../styles.css' 
import { NavBar } from "../components/"
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 0px 0px 162.5px;
`

function makeBoard(className, size, boardMaker) {
    var rows = [] 
    for (let i = 0; i < size; i++){
        let cols = [] 
        for (let j = 0; j < size; j++) {
            cols.push(boardMaker(i*size + j)) 
        }
        rows.push(
            <div className={className+'-row'} key={i}>{cols}</div>
        ) 
    }
    return (
        <div className={className}>{rows}</div>
    )        
}

function Square(props) {
    var style = {} 
    if (props.value) {
        style.color = props.value === 'X' ? '#2274A5' : '#C99418' 
    }
    if (props.winner) {
        if (props.winner === 'X') {
            style.background = '#BBDDF1' 
        } else {
            style.background = '#F6E3B6' 
        } 
    } 
    if (props.clickable) {
        style.background = '#9ED896'
    }
    return (
        <button className="square" style={style} onClick={props.onClick}>
            {props.value}
        </button>
    ) 
}

class Board extends React.Component {
    constructor(props) {
        super(props) 
        this.renderSquare = this.renderSquare.bind(this) 
    }

    renderSquare(i) {
        return (
            <Square key={i}
                value={this.props.squares[i]}
                squares={this.props.squares}
                winner={this.props.winner}
                clickable={this.props.clickable}
                onClick={() => this.props.onClick(i)}
            />
        ) 
    }

    render() {
        return makeBoard(
            'board',
            this.props.size,
            this.renderSquare
        ) 
    }
}

class Game extends React.Component {
        constructor(props) {
            super(props) 
            this.state = {
                squares: Array(this.props.size * this.props.size).fill(
                    Array(this.props.size * this.props.size).fill(null)),
                smallWinners: Array(this.props.size * this.props.size).fill(null),
                lastMove: {row: null, col: null, largeRow: null, largeCol: null},
                xIsNext: true,
                winner: null
            } 
            this.renderBoard = this.renderBoard.bind(this) 
        }
    
        isCurrentBoard(idx) {
            if (this.state.winner) {
                return false 
            }
            var lastRow = this.state.lastMove.row 
            var lastCol = this.state.lastMove.col 
            if (lastRow === null || lastCol === null) {
                return true 
            } else {
                var currentBoard = lastCol * this.props.size + lastRow 
                if (this.state.smallWinners[currentBoard]) {
                    return this.state.smallWinners[idx] === null //check to see if the small board has something in the array at idx
                } else {
                    return idx === currentBoard //check to see if idx is the same number as the currentBoard
                }
            }
        }
    
        handleClick(small_idx, large_idx) {
            var size = this.props.size 
            var largeSquares = this.state.squares.slice() // big game of tic-tac-toe
            var squares = this.state.squares[large_idx].slice() // individual games of tic tac toe at specific idx
            var smallWinners = this.state.smallWinners.slice() // winners of ind games
            if (this.state.winner || !this.isCurrentBoard(large_idx) || squares[small_idx]) {
                return // return if clicked on an individual game that is won, anything other than currentBoard, or a square that is already full w/ an X or an O
            }
            squares[small_idx] = this.state.xIsNext ? 'X' : 'O' // update individual game w/ clicked spot and fill w/ next player
            largeSquares[large_idx] = squares  // update big game with new individual game
            var lastMove = {
                row: Math.floor(small_idx / size),
                col: small_idx % size,
                largeRow: Math.floor(large_idx / size),
                largeCol: large_idx % size
            } // row and col on ind. game & big game clicked

            var smallWin = this.calculateWinner(squares, lastMove) // check to see if annyone won the individual game from this move
            smallWinners[large_idx] = smallWin && squares[smallWin[0]] // if ind. won, place winner in smallWinners array at index on big board
            var bigWin = this.calculateWinner(smallWinners,
                {row: lastMove.largeRow, col: lastMove.largeCol}) 
            var winner = bigWin ? smallWinners[bigWin[0]] : null // if big board has winner, declare who it is
            this.setState((prevState, props) => ({
                squares: largeSquares,
                smallWinners: smallWinners,
                lastMove: lastMove,
                xIsNext: !this.state.xIsNext,
                winner: winner
            })) 
        }
    
        calculateWinner(squares, lastMove) {
            if (!lastMove || lastMove.col === null || lastMove.row === null) {
                return null 
            }
            var size = parseInt(this.props.size)
            var x = lastMove.row 
            var y = lastMove.col 
            var lastPlayer = squares[x*size + y] // get X or O
            if (lastPlayer === null) {
                return null 
            }    
            // Check possible ways to win are all same player (lastPlayer):
            var wins = {
                row: [],
                col: [],
                diag: [],
                diag2: []
            }
            for (let i = 0; i < size; i++) {
                wins.row.push(x*size + i) 
            } // row
            for (let i = 0; i < size; i++) {
                wins.col.push(i*size + y) 
            } // col
            if (x === y) {
                for (let i = 0; i < size; i++) {
                    wins.diag.push(i*size + i)
                }
            }
            if (x + y === size - 1) {
                for (let i = 0; i < size; i++) {
                    wins.diag2.push(i*size + size-1-i) 
                }
            } // diagonals
    
            // see if any win combo is only an array of the lastPlayer
            for (let direction in wins) {
                var win = wins[direction] 
                if (win.length !== size) {
                    continue 
                }
                var result = win.reduce((boolAcc, index) => {
                    return boolAcc && (squares[index] === lastPlayer)
                }, true) 
                if (result) {
                    return win 
                }
            }
            return null 
        }
    
        renderBoard(i) {
            return (
                <Board key={i}
                    size={this.props.size}
                    squares={this.state.squares[i]}
                    winner={this.state.smallWinners[i]}
                    clickable={this.isCurrentBoard(i)}
                    onClick={(p) => this.handleClick(p, i)}
                />
            ) 
        }
    
        render() {
            let status 
            if (this.state.winner) {
                status = this.state.winner + ' is the winner!' 
            } else {
                if (this.state.smallWinners.indexOf(null) === -1) {
                    status = 'No one won, try again!' 
                } else {
                    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O') 
                }
            }
    
            var board = makeBoard('game', this.props.size, this.renderBoard) 
            return (
                <div className={"game-container-"+this.props.size}>
                    {board}
                    {/* {this.props.renderInfo && */}
                        <div className="game-info">
                            <div>{status}</div>
                        </div>
                    {/* } */}
                </div>
            ) 
        }
}

class TicTacToe extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            boardSize: 3,
            matchID: 0
        } 
        this.newGame = this.newGame.bind(this) 
    }

    newGame(size) {
        this.setState(prev => ({
            boardSize: size,
            matchID: prev.matchID+1
        })) 
    }

    render() {
        return (
            <div className="app">
                <div>
                <NavBar>

                </NavBar>
                <Wrapper>
                <BoardSize defaultValues={this.state} submitCallback={this.newGame} /><br/>
                <Game key={this.state.matchID}
                    size={this.state.boardSize}
                    // renderInfo={true} 
                />
                </Wrapper>
                </div>
            </div>
        ) 
    }
}

class BoardSize extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            boardSize: this.props.defaultValues.boardSize,
        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleChange(event) {
        var target = event.target 
        var value = target.value 
        var name = target.name 

        this.setState({
          [name]: value
        }) 
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitCallback(this.state.boardSize) 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="New game" />
                <label className="board-size">
                    Board size 
                    <input
                        name="boardSize"
                        type="number"
                        min="2"
                        max="4"
                        value={this.state.boardSize}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        ) 
    }
}

export default TicTacToe