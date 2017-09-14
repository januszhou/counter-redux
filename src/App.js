import React, { Component } from 'react';
import Counter from './components/Counter';
import Result from './components/Result';
import { connect } from 'react-redux';

class Component1 extends Component {
  componentDidMount(){
    console.log('Component 1');
  }

  render(){
    return <div>Component 1</div>
  }
}

class Component2 extends Component {
  componentDidMount(){
    console.log('Component 2');
  }
  render(){
    return <div>Component 2</div>
  }
}

function warpComponent(Foo){
  return class Bar extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
      console.log(`${this.props.index} mount`);
    }

    render(){
      return <Foo  {...this.props}/>;
    }
  }
}

const WappedComponent1 = warpComponent(Component1);
const WappedComponent2 = warpComponent(Component2);

function increment(){
  return {
    type: 'INCREMENT',
  }
}

function decrement(){
  return {
    type: 'DECREMENT',
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Counter onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>
        <Result counter={this.props.counter}/>
        <WappedComponent1 index="2"/>
        <WappedComponent2 index="10"/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.counter,
  }
}

const mapDispatcherToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
