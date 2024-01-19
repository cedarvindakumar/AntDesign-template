import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
export default function Header({ collapsed, setCollapsed }: any) {
    const { Header, Sider, Content } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: '#333' }} className='app-header'>
            Testing
            <col>

            </col>
        </Header>
    )
}
