import React, { useState } from 'react';
// import './index.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Layout, Menu, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import AppFooter from '../Footer/Footer';
import Header from '../Header/Header';




type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [


  getItem('Dashboard', 'sub2', <AppstoreOutlined />, [
    getItem('Dashboard 1', '5'),
    getItem('Dashboard 2', '6'),
  ]),

  // { type: 'divider' },

  getItem('Navigation Three', 'sub3', <SettingOutlined />),
  getItem('Navigation four', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const { Sider, Content } = Layout;


const Menus: React.FC = () => {

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>

      <Sider trigger={null} collapsible collapsed={collapsed} width={260} className='app-menu'>

        <Menu
          onClick={onClick}

          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />


      </Sider>
      {/* <Header collapsed={collapsed} setCollapsed={setCollapsed} /> */}
    </>

  );
};

export default Menus;