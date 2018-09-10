import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  showState() {
    return <h4>Counter: {this.props.total.counter}</h4>
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Redux Tutorial</h3>
        {this.showState()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.counter
  }
}

export default connect(mapStateToProps)(App);
