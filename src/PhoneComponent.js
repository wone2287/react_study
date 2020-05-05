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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                이름 <input name="name" onChange={this.handleSetState}></input>
                전화번호 <input name="phone" onChange={this.handleSetState}></input>
                <button type="submit">전송</button>
                {this.state.name}
                {this.state.phone}
            </form>
        )
    }
}

export default PhoneComponent;