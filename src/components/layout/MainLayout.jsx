import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Footers from '../common/Footers';
import Headers from '../common/Headers';
const { Header, Content, Footer } = Layout;

function MainLayout({ children }) {
  return (
    // <Layout>
    //   <Headers />
    //   <Content className='min-h-[75vh]'>{ children }</Content>
    //   <Footers />
    // </Layout>
    <Layout>
      <Headers />
      <Content className="site-layout">       
        <div className="site-layout-background">
          {children}
        </div>
      </Content>
      <Footers />
    </Layout>
  );
}

export default MainLayout;
