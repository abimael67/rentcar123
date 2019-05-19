import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Menu, Icon } from 'antd';
class NavMenu extends Component {
  handleClick = (e) => this.props.history.push(e.item.props.to)

  render () {
    let currentPath = this.props.location.pathname.split('/')[1]
    return (
      
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[currentPath ? currentPath : "home"]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item onClick={this.handleClick} to="/home" key="home"><Icon type="home"/>Home</Menu.Item>
      <Menu.Item onClick={this.handleClick} to="/cars" key="cars"><Icon type="car" />Cars</Menu.Item>
      <Menu.Item onClick={this.handleClick} to="/clients" key="clients"><Icon type="user" />Clients</Menu.Item>
    </Menu>
    );
  }
}
export default withRouter(NavMenu)