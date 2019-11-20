import React from 'react';
import { render } from 'react-dom';


class WinModal extends React.Component {
  constructor() {
    super()

    this.onNewGame = this.onNewGame.bind(this);
  }

  onNewGame() {
    this.props.onModalToggle('newGame')
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
          transition: '1.1s ease- out',
          margin: '0 auto',
          left: '150px',
          top: '200px'

        }
        }
      >
        Winner Winner Chicken Dinner
    < div >
          <button
            onClick={this.onNewGame}
          >
            New Game
          </button>
        </div >
      </div >
    )
  }
}

export default WinModal;
