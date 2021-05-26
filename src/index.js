import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}// Example usage: <ShoppingList name="Mark" />

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
  
  class Board extends React.Component {
    // constructors of a subclass require a call to the super class that accepts props.
    //  e.g. constructor(props) {super(props);} // this is your base for any subclass.
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        whosTurn: 'X',
      };
    }

    handleClick(i) {
      // This.state.squares is apart of Board class, where we return an array of squares.
      // .slice() creates a copy of the array.
      const squares = this.state.squares.slice();
      // Next we use the value {i} passed in from the square that called this function.
      squares[i] = this.state.whosTurn;

      // If square is taken, report an alert box.
      if (this.state.squares[i] != null) {
        alert('This square has already been taken!')
      }

      // And then set the state of all the squares within this class (Board class).
      this.setState({squares: squares});
      this.switchPlayers();
    }

    switchPlayers() {
      if (this.state.whosTurn == 'X') {
        this.setState({whosTurn: 'O'});
      }
      else {
        this.setState({whosTurn: 'X'});
      }
    }

    checkWinner(player) {
      // Each if statement sends an alert to display the winner,
      //  then clears the game board state.

      // Win Scenarios.
      // Rows
      if (this.state.squares[0] === player && this.state.squares[1] === player && this.state.squares[2] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      if (this.state.squares[3] === player && this.state.squares[4] === player && this.state.squares[5] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      if (this.state.squares[6] === player && this.state.squares[7] === player && this.state.squares[8] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      //Columns
      if (this.state.squares[0] === player && this.state.squares[3] === player && this.state.squares[6] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      if (this.state.squares[1] === player && this.state.squares[4] === player && this.state.squares[7] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      if (this.state.squares[2] === player && this.state.squares[5] === player && this.state.squares[8] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      //Diagonals
      if (this.state.squares[0] === player && this.state.squares[4] === player && this.state.squares[8] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
      if (this.state.squares[2] === player && this.state.squares[4] === player && this.state.squares[6] === player) {
        alert('Player ' + player + ' has won! Congratulations Player ' + player + '!');
        this.state.squares.fill(null);
      }
    }

    renderSquare(i) {
      // Check for a winner whenever we re-render a square.
      this.checkWinner('X');
      this.checkWinner('O');
      
      return (
        <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)} 
        />
      );
    }
  
    render() {
      // Display the next player depending on who's turn it is.
      const status = 'Next player: ' + this.state.whosTurn;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  