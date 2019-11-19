import React from 'react';
import uuidv4 from 'uuid/v4';

const Enemy = ({ enemy }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid black',
        position: 'absolute',
        backgroundColor: 'red',
        width: `${enemy.width}px`,
        height: `${enemy.height}px`,
        left: `${enemy.pos.x}px`,
        top: `${enemy.pos.y}px`,
      }}
    />
  );
};

const PlayerCharacter = ({ player }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid black',
        position: 'absolute',
        backgroundColor: 'green',
        width: `${player.width}px`,
        height: `${player.height}px`,
        left: `${player.pos.x}px`,
        top: `${player.pos.y}px`,
      }}
    />
  );
};

export default class game

  extends React.Component {
  constructor() {
    super();
    this.createEnemy = this.createEnemy.bind(this);
    this.createEnemies = this.createEnemies.bind(this);
    this.gameTick = this.gameTick.bind(this);
    this.movePlayerDiv = this.movePlayerDiv.bind(this);
    const numOfRows = 5;
    this.state = {
      gameTitle: 'Frogger',
      rowHeight: 100,
      timeBetweenEnemies: 3000,
      lastEnemyAdded: new Date().getTime(),
      numOfRows,
      player: {
        width: 99,
        height: 99,
        pos: {
          x: 200,
          y: 400,
        }
      },
      enemies: this.createEnemies(2, numOfRows),
      gameContainerStyle: {
        position: 'relative',
        width: '500px',
        height: '500px',
        border: '1px solid black',
      },
      gameTickInterval: window.setInterval(this.gameTick, 50),
    };
    window.addEventListener('keydown', this.movePlayerDiv, false);
    this.isWinner = this.isWinner.bind(this);
  }
  componentWillUnmount() {
    window.clearInterval(this.state.gameTickInterval);
    window.removeEventListener('keydown', this.movePlayerDiv);
  }
  calculateTopPxValueByLane(laneNum, rowHeight) {
    return (laneNum * rowHeight) - rowHeight;
  }
  selectRandomEnemyLane(maxRow) {
    const minLane = 1;
    const maxLane = parseInt(maxRow, 10);
    const laneNum = Math.floor(Math.random() * (maxLane - minLane)) + minLane;
    return this.calculateTopPxValueByLane(laneNum, 100);
  }
  createEnemy(maxRow) {
    const minSpeed = 2;
    const maxSpeed = 5;
    return {
      key: uuidv4(),
      width: 99,
      height: 99,
      speed: Math.floor(Math.random() * (maxSpeed - minSpeed)) + minSpeed,
      pos: {
        x: 1,
        y: this.selectRandomEnemyLane(maxRow),
      },
    };
  }
  createEnemies(numEnemies, maxRow) {
    return [...Array(numEnemies)].map(enemy => this.createEnemy(maxRow));
  }
  updateEnemyPositions(enemiesArray) {
    const updatedEnemies = enemiesArray
      .map(enemy => {
        console.log(enemy)
        enemy.pos.x += enemy.speed;

        const rightBound = enemy.pos.x + enemy.width;
        if (rightBound >= 500) {
          return null;
        }

        return enemy;
      });
    return updatedEnemies;
  }
  randomlyAddNewEnemy(enemies) {
    const now = new Date().getTime();
    let minTimeExceeded = false;
    if (
      now > (this.state.lastEnemyAdded + this.state.timeBetweenEnemies) &&
      this.state.enemies.length < 6
    ) {
      minTimeExceeded = true;
    }
    const minRoll = 1;
    const maxRoll = 51;
    const diceRoll = Math.floor(Math.random() * (maxRoll - minRoll)) + minRoll;
    if (
      minTimeExceeded &&
      diceRoll > (maxRoll / 3)
    ) {
      return enemies.concat([this.createEnemy(this.state.numOfRows)]);
    }
    return enemies;
  }
  gameTick() {
    const enemiesArray = this.randomlyAddNewEnemy(this.state.enemies);
    const enemyAdded = enemiesArray.length > this.state.enemies.length;
    let updatedEnemies = this.updateEnemyPositions(enemiesArray);
    // console.log(enemiesArray)
    updatedEnemies = updatedEnemies.filter(enemy => enemy !== null);
    let lastEnemyAdded = this.state.lastEnemyAdded;
    if (enemyAdded) {
      lastEnemyAdded = new Date().getTime();
    }
    this.checkCollisions(enemiesArray);
    this.setState({
      enemies: updatedEnemies,
      lastEnemyAdded,
    });
  }
  movePlayerDiv(e) {
    const player = this.state.player;
    if (e.code === 'ArrowUp') {
      e.preventDefault();
      player.pos.y = player.pos.y - 100;
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      player.pos.y = player.pos.y + 100;
    }
    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      player.pos.x = player.pos.x - 100;
    }
    if (e.code === 'ArrowRight') {
      e.preventDefault();
      player.pos.x = player.pos.x + 100;
    }
    this.setState({ player });
  }
  checkCollisions(enemiesArray) {
    const player = this.state.player;
    const collision = enemiesArray.reduce((acc, enemy) => {
      if (this.didCollide(player, enemy)) {
        return true;
      }
      return acc;
    }
      , false);

    if (collision) {

      console.log('We had a collision here!');
    }
  }
  didCollide(a, b) {
    return !(
      ((a.pos.y + a.height) < (b.pos.y)) ||
      (a.pos.y > (b.pos.y + b.height)) ||
      ((a.pos.x + a.width) < b.pos.x) ||
      (a.pos.x > (b.pos.x + b.width))
    );
  }

  isWinner() {
    if (this.state.player.pos.y === 0) {
      return (
        <div
          style={{
            display: 'inline-block',
            border: '1px solid black',
            position: 'absolute',
            left: '50%',
            backgroundColor: 'red'

          }}>You have won Yayyy!</div>
      )
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.gameTitle}</h1>
        <h4>Move with the arrow keys</h4>
        <div
          style={this.state.gameContainerStyle}
        >
          {this.isWinner()}
          <PlayerCharacter
            player={this.state.player}
          />
          {
            this.state.enemies.map(enemy => (
              <Enemy
                key={enemy.key}
                enemy={enemy}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
