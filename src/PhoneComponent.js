import React, { Component } from 'react';

class PhoneComponent extends Component {
    state = {
        name : '',
        phone : ''
    }

    handleSetState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <form>
                이름 <input name="name" onChange={this.handleSetState}></input>
                전화번호 <input name="phone" onChange={this.handleSetState}></input>
                {this.state.name}
                {this.state.phone}
            </form>
        )
    }
}

export default PhoneComponent;