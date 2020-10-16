import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Cards.css';
import { Card, Avatar, List } from 'antd';
import { Link } from 'react-router-dom';

class Cards extends Component {

  state = {
    data: '',
  }

  // componentDidUpdate = () => {
  //   if (this.state.data === '' | this.state.data === undefined ) {
  //     const { userData } = this.props;
  //     const info = userData.users;
  //     this.setState({ data: info });
  //   }
  // }
  fetchData = () => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data.users }))
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="Container">
        <div className="users_style">
        <Card headStyle={{ backgroundColor: 'transparent' }} type="inner" title='Select an account' style={{ width: '40%', minWidth: '300px', borderRadius: '30px', height: '400px'}}>
          <div className='scrollbar' style={{ height: '300px' }}>
            <List 
              itemLayout="horizontal"
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.profilepicture} />}
                    title={<Link to={{ pathname: `/profile/id=${item.id}`, state: { data: item } }}>{item.name}</Link>}
                  />
                </List.Item>
              )}
            />
          </div>
        </Card>
        </div>
      </div>
    );
  }
}

export default Cards;