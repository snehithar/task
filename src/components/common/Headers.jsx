import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

function Headers() {
  const location = useLocation();
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" ></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={'/start'}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key='/start'><Link key='start' to='/start' />Start</Menu.Item>
        <Menu.Item key='/reports'><Link key='reports' to='/reports' />Report</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Headers;
