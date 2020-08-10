/**
 *@author  liumm308
 *@data  2020/07/09 14:13
 *@mail xidian_liu@163.com
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Content, Sider, Footer } = Layout;
import './mainlayout.module.less';
import 'antd/dist/antd.less';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Header className='header'>
                    <div className="logo" ><div className='iconImage' style={{width:31,marginRight: 10}}></div><div>Data Dance</div></div>
                    <div className='buttonList'>
                        <Button className='buttonItem' style={{marginRight: 20}}  type={'link'}>登录</Button>
                        <Button className='buttonItem' type={'primary'}>注册</Button>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content className='contentDiv'>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default MainLayout;