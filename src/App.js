import React, { Component, Fragment } from 'react';
import PhoneComponent from './PhoneComponent';
import './App.css';

class App extends Component {
  id = 2
  state = {
    information : [{
      id : 1,
      name : 'heo',
      phone : '1234'
    }]
  };

  handleCreate = (data) => {
    const { information } = this.state;

    this.setState({
      'information' : information.concat({id : this.id++, ...data})
    })
  }

  render(){
    const { information } = this.state;

    return (
      <Fragment>
        <h3>test react</h3>
        <PhoneComponent onCreate={this.handleCreate}/>
        {JSON.stringify(information)} 
      </Fragment>
    )
  }
}

export default App;
