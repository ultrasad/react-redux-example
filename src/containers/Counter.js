//import React, {Fragment, useState, useEffect} from 'react';
import React, {Fragment, useState, useEffect, useCallback} from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counters';

import { fetchPending, fetchSuccess, countClick } from '../actions/fetchingCat';

import axios from 'axios';

const Counter = ({ message, counter, cat, isFetching, count, dispatch }) => {
    //const [count, setCount] = useState(0);
    //const [cat, setCat] = useState({});

    const [isError, setIsError] = useState(false);

    //const randomCat = () => axios.get('https://aws.random.cat/meow');
    const fetchCat = () => axios.get('https://aws.random.cat/meow');

    //let fetchCatLoading = 'Loading....';

    //inline reducer
    //const [{ cat, isFetching, count }, dispatch] = useReducer(reducer, initialState);


    const eventHandler = useCallback(() => {
       
        dispatch(fetchPending());
        setIsError(false);

        async function fetchMeow() {
            /*
            let response = await fetch('api/data')
            response = await res.json()
            console.log(response);
            dataSet(response);
            */

           //const response = await fetchCat();
           //console.log('response meow fetch file 1: ' + response.data.file);
           //dispatch(fetchSuccess(response.data));
            
            try {
                await fetchCat().then(response => {
                        //return response.data;
                        console.log('response meow fetch file 2: ' + response.data.file);
                        dispatch(fetchSuccess(response.data));
                });
            } catch(error){
                setIsError(true);
            }
        }

        fetchMeow();
        
    }, [dispatch]);

    useEffect(() => {
        /*
        randomCat().then(response => {
          setCat(response.data)
        });
        */
        
        //dispatch(fetchPending());
        
        /*
        fetchCat().then(response => {
            dispatch(fetchSuccess(response.data));
        });
        */

       eventHandler();
      
    }, [eventHandler]);
      
    // ใส่ log เพื่อดูว่ามัน render ยังไง
    console.log('render >>>');

    /*
    if (!isFetching) {
        fetchCatLoading = <img src={cat.file} alt="Meow" width="256" />
    } 
    */

    return (
        <Fragment>
            <div className="columns column is-12">
                {message}
            </div>

            <p>
            You click {count} times
            </p>

            <p>
            <button className="button is-small is-link"
            style={{
                padding: '4px 8px',
                margin: '10px 0',
                borderRadius: 4,
                fontSize: '1rem'
            }}
            onClick={() => dispatch(countClick(count))}
            >
            Click me
            </button>&nbsp;&nbsp;
            <button className="button is-small is-danger"
            style={{
                padding: '2px 4px',
                margin: '10px 0',
                borderRadius: 4,
                fontSize: '1rem'
            }}
            onClick={() => eventHandler()}
            >
            Change Meow
            </button>
            </p>

            <p>{/*fetchCatLoading*/}</p>
            {isError && <div>Something went wrong ...</div>}
            <p>
            {isFetching ? ('Loading ...'):(<img src={cat.file} alt="Meow" width="256" />)}
            </p>

            {/*
                <p>
                    <img src={cat.file} alt="Meow" width="256" />
                </p>
            */}

            <div className="columns column is-12">
            <h1>Counter : {counter}</h1>
            </div>

            <div className="buttons">
            <button onClick={() => dispatch(increment(1))} className="button is-small is-primary">
                +1
            </button>
            <button onClick={() => dispatch(increment(2))} className="button is-small is-link">
                +2
            </button>
            <button onClick={() => dispatch(increment(3))} className="button is-small is-info">
                +3
            </button>
            </div>

            <div className="buttons">
            <button onClick={() => dispatch(decrement(1))} className="button is-small is-primary">
                -1
            </button>
            <button onClick={() => dispatch(decrement(2))} className="button is-small is-link">
                -2
            </button>
            <button onClick={() => dispatch(decrement(3))} className="button is-small is-info">
                -3
            </button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    message: 'This is message from mapStateToProps',
    counter: state.counters.score || 0,
    cat: state.fetchingCat.cat,
    isFetching: state.fetchingCat.isFetching,
    count: state.fetchingCat.count
});

/*
const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value)),
  decrement: (value) => dispatch(decrement(value))
});
*/

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps)(Counter);