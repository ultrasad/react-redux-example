import React from 'react';
import { connect } from 'react-redux';

//import {increment, decrement} from '../actions/counters';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Counter from './containers/Counter';
import Header from './components/Header';
import Footer from './components/Footer';

//const App = ({ message, counter, dispatch }) => ( //with dispatch, without mapDispatchToProps
const App = () => {
    return (
      <div className="container">
        <Header />

        <Counter />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
      </div>
    );
}

//const AppWithConnect = connect(mapStateToProps)(App);
const AppWithConnect = connect()(App);
export default AppWithConnect;