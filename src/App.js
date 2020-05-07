import React, { Component, Fragment } from 'react';
import PhoneComponent from './PhoneComponent';
import PhoneInfo from './PhoneInfo';
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
<<<<<<< HEAD
        <PhoneInfo info={{id : '1', name : 'heo', phone : '012300'}}/>
=======
        {JSON.stringify(information)} 
>>>>>>> 7e26c34b1685fddeed75c40326f6a5b99685a929
      </Fragment>
    )
  }
}

export default App;
