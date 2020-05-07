import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            id : "0",
            name : "none",
            phone : "000-0000"
        }
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
            </div>
        )
    }
}

export default PhoneInfo;
