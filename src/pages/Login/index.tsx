import { FC } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';

const Login:FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" align="middle" style={{ marginTop: '10rem' }}>
      <Col span={8}>
        <Card>
          <Title
            level={2}
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            {i18n.t('login')}
          </Title>
          <Form
            title={i18n.t('login')}
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={i18n.t('email')}
              name="email"
              rules={[
                { required: true, message: i18n.t('required', { label: i18n.t('email') }) },
                { type: 'email' },
              ]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: i18n.t('required', { label: i18n.t('password') }) },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" shape="round" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
