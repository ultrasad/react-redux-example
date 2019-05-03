import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counters';

const Counter = ({ message, counter, increment, decrement }) => {
    return (
        <React.Fragment>
            <div className="columns column is-12">
                {message}
            </div>

            <div className="columns column is-12">
            <h1>Counter : {counter}</h1>
            </div>

            <div className="buttons">
            <button onClick={() => increment(1)} className="button is-small is-primary">
                +1
            </button>
            <button onClick={() => increment(2)} className="button is-small is-link">
                +2
            </button>
            <button onClick={() => increment(3)} className="button is-small is-info">
                +3
            </button>
            </div>

            <div className="buttons">
            <button onClick={() => decrement(1)} className="button is-small is-primary">
                -1
            </button>
            <button onClick={() => decrement(2)} className="button is-small is-link">
                -2
            </button>
            <button onClick={() => decrement(3)} className="button is-small is-info">
                -3
            </button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    message: 'This is message from mapStateToProps',
    counter: state.counters.score || 0
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);