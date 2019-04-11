import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../../css/login.css';
import '../../App.css';
import 'antd/dist/antd.css';
import Auth from '../../services/auth';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    positions: [1,2,3,4]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        Auth.login({ user: values.userName, password: values.password });
      }
    });
  }

  login = () => {
    localStorage.setItem('jwt', 'dasdasdasdasdas');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        <header className="App-header">
          <img src='http://etribunal.stjcolima.gob.mx/assets/img/logo.png' alt="logo" />
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Debes ingresar tu usuario!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" login={this.login}>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Link to="/beto">Ir al componente de beto</Link>
          <span>{process.env.REACT_APP_LOGIN_SERVICE_URL}</span>
        </header>
      </div>
    );
  }
}

export default App = Form.create({ name: 'normal_login' })(App);;
