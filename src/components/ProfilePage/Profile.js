import React, { Component } from 'react';
import './Profile.css';

import { Layout, Menu, Avatar, PageHeader, Row, Col, Tooltip, Card } from 'antd';
import { WechatOutlined, UpOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; 

const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {

  state = {
    userData: '',
    companyData: '',
    address: '',
    location: '',
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount = () => {
    const { handle } = this.props.match.params;
    const { data } = this.props.location.state;
    console.log(data);
    this.setState({ 
      userData: data, 
      companyData: data.company, 
      address: data.address,
      location: data.address.geo 
    });
  }
  render() {
    const { userData, companyData, address, location } = this.state;
    console.log(this.state.data);
    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Sider style={{ backgroundColor: '#5E3AC8' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          
          <Menu theme="dark" defaultSelectedKeys={['1']} style={{ position: 'absolute', top: '40%', backgroundColor: '#5E3AC8' }} mode="inline">
            <Menu.Item key="1" onClick={() => console.log('chik')}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" >
              Posts
            </Menu.Item>
            <Menu.Item key="3" >
              Gallery
            </Menu.Item>
            <Menu.Item key="4" >
              ToDo
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ textAlign: 'left', width: '100%',}}>
              <PageHeader
                className="site-page-header-responsive"
                title={<h1 className="profile-style">Profile</h1>}
                extra={[
                  <Menu mode="horizontal">
                    <SubMenu title={ 
                        <div><Avatar src={userData.profilepicture} className="profile-pic" />
                        <p className="profile-log">{userData.name}</p></div>}
                      >
                      <Menu.ItemGroup style={{ borderRadius: '20px' }}>
                      <Card style={{ width: 250 }}>
                        <div style={{ textAlign: 'center', }}>
                          <Avatar src={userData.profilepicture} size={80} />
                          <p style={{ marginTop: '15px' }}>{userData.name}</p>
                          <span style={{ fontSize: '12px', color: 'grey' }}>{userData.email}</span>
                          <hr />
                        </div>
                      </Card>
                      </Menu.ItemGroup>
                    </SubMenu>
                  </Menu>
                ]}
              >
            </PageHeader>
            </div>
            
          </Header>
          <Content style={{ margin: '0', backgroundColor: '#FFFFFF' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
              <Row gutter={16}>
                <Col className="gutter-row" span={10}>
                  <div className="left-col">
                    <Avatar src={userData.profilepicture} size={175} />
                    <h1 className="user-name">{userData.name}</h1>
                    <div>
                      <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                          <div className="profile-info-left">
                            <p className="user-name">Username :</p>
                            <p className="user-name">e-mail :</p>
                            <p className="user-name">Phone :</p>
                            <p className="user-name">Website :</p>
                          </div>
                        </Col>
                        <Col className="gutter-row" span={16}>
                          <div className="profile-info-right">
                            <p className="user-name">{userData.username}</p>
                            <p className="user-name">{userData.email}</p>
                            <p className="user-name">{userData.phone}</p>
                            <p className="user-name">{userData.website}</p>
                          </div>
                        </Col>
                      </Row>
                      <hr />
                      <h1 className="font-style">Company</h1>
                      <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                          <div className="profile-info-left">
                            <p className="user-name">Name :</p>
                            <p className="user-name">catchphrase :</p>
                            <p className="user-name">bs :</p>
                          </div>
                        </Col>
                        <Col className="gutter-row" span={16}>
                          <div className="profile-info-right">
                            <p className="user-name">{companyData.name}</p>
                            <p className="user-name">{companyData.catchPhrase}</p>
                            <p className="user-name">{companyData.bs}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={14}>
                  <div className="right-col">
                    <h1 className="font-style">Address:</h1>
                    <div style={{ textAlign: 'center' }}>
                      <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                          <div className="profile-info-left">
                            <p className="user-name">Street :</p>
                            <p className="user-name">Suite :</p>
                            <p className="user-name">City :</p>
                            <p className="user-name">Zipcode :</p>
                          </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                          <div className="profile-info-right">
                            <p className="user-name">{address.street}</p>
                            <p className="user-name">{address.suite}</p>
                            <p className="user-name">{address.city}</p>
                            <p className="user-name">{address.zipcode}</p>
                          </div>
                        </Col>
                      </Row>
                      <iframe 
                        name="gMap" 
                        width="500"
                        height="300"
                        style={{ border: 0, borderRadius: '20px' }}
                        src={`https://www.google.com/maps/embed/v1/place?q=${location.lat},${location.lng}&key=AIzaSyDJzQJeUKT9EnRUtGd5yMoBTnjyIyXxkbs`}
                        
                        >
                        </iframe>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ backgroundColor: '#FFFFFF' }}>
            <Tooltip 
              placement="top" 
              color="white" 
              trigger='click' 
              style={{ borderRadius: '20px' }}
              title={
                <Card style={{ width: 250 }}>
                  <div style={{ textAlign: 'center', }}>
                    <Avatar src={userData.profilepicture} className="chat-icon" />
                    <p style={{ marginTop: '15px' }}>{userData.name}</p>
                    <hr />
                  </div>
                </Card>
            }>
            <div className="chat-style" onClick={() => console.log('awes')}>
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