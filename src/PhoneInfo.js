import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            id : "0",
            name : "none",
            phone : "000-0000"
        }
    }

    state = {
        editing : false
    }

    handleRemove = () => {
        const { id } = this.props.info;
        this.props.remove(id);
    }

    handleUpdate = () => {
        const { info } = this.props;
        const { id } = info;
        this.props.update(id, info);

        this.setState({
            editing : false
        })
    }

    handleEditing = () => {
        this.setState({
            editing : true
        })
    }

    render(){
        const { editing } = this.state;
        const { name, phone } = this.props.info;

        const style = {
            border : "1px solid black",
            padding : "8px",
            margin : "8px"
        }

        if (editing){
            return (
                <div style={style}>
                <input name="name" value={name}></input>
                <input name="phone" value={phone}></input>
                <button onClick={this.handleUpdate}>등록</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>   
            )
        }

        return (
            <div style={style}>
                <input name="name" value={name}></input>
                <input name="phone" value={phone}></input>
                <button onClick={this.handleEditing}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;
