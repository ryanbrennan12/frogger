import React from 'react';
import { render } from 'react-dom';


class GameOverModal extends React.Component {
  constructor() {
    super();
    this.onNewGame = this.onNewGame.bind(this);
  }

  onNewGame(typeOfGame) {
    this.props.onModalToggle(typeOfGame)
  }

  render() {
    if (this.props.show === false) {
      return null;
    }

    return (
      <div
        style={{
          position: 'absolute',
          background: 'orange',
          border: '1px solid #ccc',
          margin: '0 auto',
          left: '150px',
          top: '200px',
          borderRadius: '10px'
        }}
      >
        OH NO!!! SPLAT!!🐸😭
    < div >
          <button
            style={{
              margin: '0 auto',
              display: 'block'
            }}
            onClick={() => this.onNewGame('newGame')}
          >
            New Game
          </button>
        </div >
      </div >
    )
  }
}

export default GameOverModal;




