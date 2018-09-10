import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions'

class App extends Component {
  state = {
    text:''
  };

  showState() {
    return <h4>Counter: {this.props.total.counter}</h4>
  }

  handleIncrementOne = () => {
    // console.log(1);
    this.props.onIncrementClick()
  }

  handleAddTen = () => {
    // console.log(10);
    this.props.onAddClick()
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('text', this.state.text);
    // this.props.onAddTodo(this.state.text)
    this.props.onAddTodoAsync(this.state.text)
    this.setState({text: ''})
  }

  render() {
    // console.log('this.props', this.props);
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Redux Tutorial</h3>
        {this.showState()}
        <br/>
        <button onClick={this.handleIncrementOne}>Increment 1</button>
        <br/>
        <button onClick={this.handleAddTen}>Add 10</button>

        <br/>
        <br/>

        <form onSubmit={this.handleSubmit}>
          <label name="todo"> todo </label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch({type: 'INCREMENT'})
    },
    onAddClick: () => {
      dispatch({type: 'ADD', value: 10})
    },
    // onAddTodo: (text) => {
    //   // dispatch({type: 'ADD_TODO', text: text})
    //   dispatch(addTodo(text))
    // },
    onAddTodoAsync: (text) => {
      console.log('dispatch text', text);
      return setTimeout(() => dispatch({ type: 'ADD_TODO', text}), 2000)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
