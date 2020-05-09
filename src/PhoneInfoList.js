import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo.js';

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }

    render(){
        const { data, onDelete, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} remove={onDelete} update={onUpdate}/>)
            ); // 메소드 호출

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;