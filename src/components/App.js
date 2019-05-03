import React from 'react';
import { connect } from 'react-redux';

//import {increment, decrement} from '../actions/counters';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Counter from '../containers/Counter';
import Header from './Header';
import Footer from './Footer';

//const App = ({ message, counter, dispatch }) => ( //with dispatch, without mapDispatchToProps
const App = () => (
  <div className="container">

    <Header />
    
    <Counter />

    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  
  </div>
);

//const AppWithConnect = connect(mapStateToProps)(App);
const AppWithConnect = connect()(App);
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
