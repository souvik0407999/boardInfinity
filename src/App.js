/*


import React from 'react';
import './App.css';
import { Layout , Breadcrumb } from 'antd';
import { Typography } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}


const { Title } = Typography;

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Header>
      <Title style={{color:'white'}} level={3}>Disappearing tweets</Title>
      </Header>
      <Content style={{ padding: '0 500px' }}>
      <Breadcrumb style={{ margin: '150px 0' }}>
      <Input placeholder="Basic usage" />
      <Button type="primary">Tweet</Button>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      <Space direction="vertical">
      <DatePicker onChange={onChange} />
      </Space>
      </Breadcrumb>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}




export default App;s
*/


import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      info: '',
      formData: {
        username: '',
      }
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }
handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      info : JSON.stringify(response.data, undefined, 2)
    })).catch((err) => { console.log(err); });
  };
handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Analytics</h1>
        </header>
        <p className="App-intro">
          Watch this space...
        </p>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <p><b>Username:</b></p>
        <p>{this.state.gitun}</p>
        <b>Information:</b>
        <pre>{this.state.info}</pre>
</div>
    );
  }
}
export default App;