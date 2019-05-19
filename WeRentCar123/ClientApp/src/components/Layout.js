import React, { Component } from 'react';
import  NavMenu from './NavMenu';
import { Layout as Layout2, Breadcrumb } from 'antd';
import {withRouter} from 'react-router'
import {capitalize} from '../common/util'
const { Header, Content, Footer } = Layout2;
class Layout extends Component { 

  render () {
    return (
      <Layout2 className="layout">
      <Header>
        <div className="logo" />
        <NavMenu/>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {this.props.location.pathname.split('/').map((path, i)=>
          <Breadcrumb.Item key={i}>{capitalize(path)}</Breadcrumb.Item>
          )}          
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Simple Rent Car ©2019 Created by @abimael67</Footer>
    </Layout2>
    );
  }
}
export default withRouter(Layout)