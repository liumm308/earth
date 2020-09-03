/**
 *@author  liumm308
 *@data  2020/07/09 14:28
 *@mail xidian_liu@163.com
 */

import React from 'react';
import {Button} from 'antd';
import Store from '@/store/index';

class Business extends React.Component {
    constructor(props) {
        super(props);
    }

    test() {
        let storeInfo = Store.getState();
        console.log(storeInfo);
    }

    setValue() {
        let action = {
            type: 'bgColor',
            bgColor: "blue",
        };
        Store.dispatch(action);
    }

    render() {
        return (
            <div className={'mainContent'}>
                <Button onClick={() => {
                    this.test();
                }} type={"primary"}>查询状态</Button>
                <Button onClick={() => {
                    this.setValue()
                }}>设置状态</Button>
            </div>
        )
    }
}

export default Business;