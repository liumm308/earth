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
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Header className='header'>
                    <div className="logo" ><div className='iconImage' style={{width:31,marginRight: 10}}></div><div>Atom Record</div></div>
                    <div className='buttonList'>
                        <Button className='buttonItem' style={{marginRight: 20}}  type={'link'}>登录</Button>
                        <Button className='buttonItem' type={'primary'}>注册</Button>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Button type={'primary'} >Test</Button>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default MainLayout;