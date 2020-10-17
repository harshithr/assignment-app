import React, { Component } from 'react';
import './Profile.css';

import { Layout, Menu, Avatar, PageHeader, Tooltip, Card, List } from 'antd';
import { WechatOutlined, UpOutlined } from '@ant-design/icons';
import { Link,} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {

  state = {
    userData: '',
    companyData: '',
    address: '',
    location: '',
    data: ''
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  fetchData = () => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data.users }))
  }

  componentDidMount = () => {

    this.fetchData();
  }
  render() {
    console.log(this.state.data);
    const { userData, data } = this.state;
    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Sider style={{ backgroundColor: '#5E3AC8' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          
          <Menu theme="dark" defaultSelectedKeys={[this.props.highlight]} style={{ position: 'absolute', top: '40%', backgroundColor: '#5E3AC8' }} mode="inline">
            <Menu.Item key="1" onClick={() => console.log('chik')}>
              <Link to="/">Profile</Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/gallery">Gallery</Link>
            </Menu.Item>
            <Menu.Item key="4" >
              <Link to="/todo">ToDo</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ textAlign: 'left', width: '100%',}}>
              <PageHeader
                className="site-page-header-responsive"
                title={<h1 className="profile-style"> {this.props.category}</h1>}
                
              >
            </PageHeader>
            </div>
            
          </Header>
          <Content>
            <h1 style={{ position: 'fixed', top: '40%', left: '40%', fontSize: '70px', color: 'grey' }}>Coming Soon</h1>
          </Content>
          <Footer style={{ backgroundColor: '#FFFFFF' }}>
            <Tooltip 
              placement="top" 
              color="transparent" 
              trigger='click' 
              style={{ borderRadius: '20px' }}
              title={
                <Card className="scrollbar" style={{ width: 250, height: 300 }}>
                  <div >
                    <List 
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta 
                            avatar={(item.name !== userData.name) ? <Avatar src={item.profilepicture} /> : ''}
                            title={(item.name !== userData.name) ? <span style={{ fontSize: 12 }}>{item.name}<span className="dot"></span></span>: ''}
                
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Card>
            }>
            <div className="chat-style">
              <div className="chat-spacing">
                <WechatOutlined style={{ color: 'white', fontSize: '30px', paddingLeft: '8px', float: 'left'}} />
                <p className="chat-font">Chat</p>
                <UpOutlined style={{ color: 'white', marginLeft: '70px' }} />
              </div>
            </div>
            </Tooltip>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Profile;