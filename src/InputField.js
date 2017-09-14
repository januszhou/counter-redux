import React from 'react';
import { connect } from 'react-redux';

function onChange(payload){
  return {
    type: 'CHANGE',
    payload: payload,
  }
}

class InputField extends React.Component {
  render(){
    return <input type="number" onChange={(evt) => this.props.onChangeInput(evt.target.value)}/>
  }
}


const mapDispatcherToProps = (dispatch) => {
  return {
    onChangeInput: (payload) => dispatch(onChange(payload)),
  }
}

export default connect(null, mapDispatcherToProps)(InputField);