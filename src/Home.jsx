import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('/users', { method: 'get' })
    .then(res => res.json())
    .then((users) => {
      console.log('users: ', users);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  }
  render () {
    return (
      <h1>User Home Page</h1>
    );
  }
}

export default Home;