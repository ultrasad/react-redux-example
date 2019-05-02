import React from 'react';
import { connect } from 'react-redux';

import {increment, decrement} from '../actions/counters';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

//const App = ({ message, counter, dispatch }) => ( //with dispatch, without mapDispatchToProps
const App = ({ message, counter, increment, decrement }) => (
  <div className="container">

    <div className="columns column is-12">
      {message}
    </div>
    
    <div className="columns column is-12">
      <h1>Counter : {counter}</h1>
    </div>

    <div className="buttons">
      <button onClick={() => increment(1)} className="button is-primary">
        +1
      </button>
      <button onClick={() => increment(2)} className="button is-link">
        +2
      </button>
      <button onClick={() => increment(3)} className="button is-info">
        +3
      </button>
    </div>

    <div className="buttons">
      <button onClick={() => decrement(1)} className="button is-primary">
        -1
      </button>
      <button onClick={() => decrement(2)} className="button is-link">
        -2
      </button>
      <button onClick={() => decrement(3)} className="button is-info">
        -3
      </button>
    </div>

    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  
  </div>
);

const mapStateToProps = (state) => ({
    message: 'This is message from mapStateToProps',
    counter: state.counters.score || 0
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value))
});

//const AppWithConnect = connect(mapStateToProps)(App);
const AppWithConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppWithConnect;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//export default App;
