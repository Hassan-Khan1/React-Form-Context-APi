import React, { createContext, useContext, useState } from 'react';
import { PageHeader } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Password from 'antd/lib/input/Password';
import DashBoard from '../WatchMates';
import { useHistory } from 'react-router-dom';
import { FormContext } from '../../Context/FormContext';

// console.log(name)
// const FormContext111 = createContext({})

const Login = () => {
  const history = useHistory();

  const { data, setData } = useContext(FormContext)
  let name = 'hassan'

  // const [data, setData] = useState({
  //   username: 'Saad',
  //   Password: '',
  // });
  // console.log("Data ; ", data)

  const onChange = (value) => {
    // setcounter(event.target.value);
    console.log('Username : PassWord', value)
    setData(value);
    history.push('/');

  };
  console.log('data : ',data)

  return (




    <div className='Login'>
      {/* <FormContext111.Provider value={{ data, setData, name }}> */}
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
          <Input value={data.username} />
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
      {/* </FormContext111.Provider> */}

    </div>

  );
}
export default Login;
// export { FormContext111, Login };



