import React from 'react';
import {connect} from 'react-redux';

import {increment} from '../actions';
import {decrement} from '../actions';

import './App.css';
const App =(props)=>{
    console.log(props);
    return(
        <div className= "container main">
            <h1>Counting App</h1>
            <h3>{props.count}</h3>
            <button className="btn" onClick={props.increment}>Increment</button>
            <button className ="btn" onClick ={props.decrement}> Decrement</button>
        </div>);
};

const mapDispatchtoProps =(dispatch)=>{
    return {
        increment:  ()=>dispatch(increment()),
        decrement:  ()=>dispatch(decrement())
    };
}
const mapStateToProps = (state)=>{
        return {count: state.count};
    };

export default connect(mapStateToProps,mapDispatchtoProps)(App);