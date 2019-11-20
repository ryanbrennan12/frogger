import React from 'react';
import { render } from 'react-dom';


class WinModal extends React.Component {
  constructor() {
    super()

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
          background: '#38A1F3',
          border: '1px solid #ccc',
          margin: '0 auto',
          left: '150px',
          top: '200px',
          borderRadius: '10px'

        }}
      >
        Winner Winner
        Chicken Dinner 🐥
    < div >
          <button
            onClick={() => this.onNewGame('newGame')}
          >
            New Game
          </button>
          <button
            onClick={() => this.onNewGame('levelUp')}
          >
            Next Level
          </button>
        </div >
      </div >

    )
  }
}

export default WinModal;


