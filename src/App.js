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

function increment(payload){
  return {
    type: 'INCREMENT',
    payload,
  }
}

function decrement(payload){
  return {
    type: 'DECREMENT',
    payload,
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt){
    this.setState({ inputValue: evt.target.value });
  }

  render() {
    return (
      <div>
        <Counter onIncrement={() => this.props.onIncrement(this.state.inputValue)} onDecrement={() => this.props.onDecrement(this.state.inputValue)}/>
        <Result counter={this.props.counter}/>
        <input type="number" value={this.state.inputValue} onChange={this.onChange}/>
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
    onIncrement: (value) => dispatch(increment(value)),
    onDecrement: (value) => dispatch(decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
