/**
 *@author  liumm308
 *@data  2020/07/09 14:13
 *@mail xidian_liu@163.com
 */

import React from 'react';
import './mainlayout.module.less';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='test change'>Home</div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default MainLayout;