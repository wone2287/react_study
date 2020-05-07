import React, { Component, Fragment } from 'react';
import PhoneComponent from './PhoneComponent';
import PhoneInfo from './PhoneInfo';
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
        <PhoneInfo info={{id : '1', name : 'heo', phone : '012300'}}/>
      </Fragment>
    )
  }
}

export default App;
