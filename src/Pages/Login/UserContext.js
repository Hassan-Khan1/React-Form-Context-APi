import React, { createContext,useContext ,useState}   from 'react';
import { PageHeader } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';


// console.log(name)

const Login = () => {

  // console.log(Form)
  const[data,setdata ] = useState();



  
  const onChange = (vals) => {
    // setcounter(event.target.value);
    const FormData = createContext(vals);
    
    console.log('Username : PassWord', vals)
    setdata(vals)
  };



  return (
    <div className='Login'>
    <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
  <Form  onFinish={onChange}>
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
export default  Login;




