import React, { Component, Fragment } from 'react';
import PhoneComponent from './PhoneComponent';
import './App.css';

class App extends Component {

  handleCreate = (data) => {
    console.log(data);
  }

  render(){
    return (
      <Fragment>
        <h3>test react</h3>
        <PhoneComponent onCreate={this.handleCreate}/>
      </Fragment>
    )
  }
}

export default App;
