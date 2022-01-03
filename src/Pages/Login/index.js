import React, { createContext, useContext, useState } from 'react';
import { PageHeader } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Password from 'antd/lib/input/Password';
import DashBoard from '../WatchMates';
import { useHistory } from 'react-router-dom';
import { FormContext } from '../../Context/FormContext';

// console.log(name)

const Login = () => {
  const history = useHistory();

  const {data,setData} = useContext(FormContext)

  // const [data, setdata] = useState({
  //   username: '',
  //   Password: '',
  // });
  console.log("Data ; ", data)

  const onChange = (vals) => {
    // setcounter(event.target.value);
    console.log('Username : PassWord', vals)
    setData(vals);
    history.push('/');

  };



  return (
    <div className='Login'>

      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Form onFinish={onChange}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>

  );
}
export default Login;
// export { for };



