import React from 'react';
import { render } from 'react-dom';


class WinModal extends React.Component {
  constructor() {
    super()



    this.onNewGame = this.onNewGame.bind(this)
  }
  onNewGame(e) {
    this.props.onClose()
  }
  render() {

    if (this.props.show === false) {
      return null;
    }

    return (
      <div>
        Winner Winner Chicken Dinner
      <div>
          <button
            onClick={this.onNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    )
  }
}

export default WinModal;
