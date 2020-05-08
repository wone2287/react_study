import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            id : "0",
            name : "none",
            phone : "000-0000"
        }
    }

    handleRemove = () => {
        const { id } = this.props.info;
        this.props.remove(id);
    }

    render(){
        const style = {
            border : "1px solid black",
            padding : "8px",
            margin : "8px"
        }

        const { name, phone } = this.props.info;

        return (
            <div style={style}>
                <div>{name}</div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;
