import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LikeButton/>
      </div>
    );
  }
}

class LikeButton extends Component {
  state = {
    count: 0,
  };
  click = ()=> {
    this.setState(({ count})=>({ count: count + 1,
    }))
  };
  render() {
    return (
        <button onClick={this.click}>{this.state.count}{this.state.count===1? ' like':' likes'} </button>
    )
  }
}

export default App;
