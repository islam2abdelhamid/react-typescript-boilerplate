import { FC } from 'react';
import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/form/style/css';

const ChangePassword: FC = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Title level={2}>{i18n.t('changePassword')}</Title>
      <Form
        form={form}
        onFinish={async () => {
          try {
            const values = await form.validateFields();
            console.log('🚀 ~ file: index.tsx ~ line 32 ~ values', values);
          } catch (error) {
            console.log('🚀 ~ file: index.tsx ~ line 35 ~ onFinish={ ~ error', error);
          }
        }}
        title={i18n.t('changePassword')}
        layout="vertical"
        name="user_form"
        autoComplete="off"
      >
        <Form.Item
          name="old_password"
          label={i18n.t('oldPassword')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('oldPassword') }) },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="password"
          label={i18n.t('newPassword')}
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('newPassword') }) },
            {
              min: 8,
            },

          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={i18n.t('confirmPassword')}
          dependencies={['new_password']}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              required: getFieldValue('password')?.length,
              message: i18n.t('required', { label: i18n.t('confirmPassword') }),
            }),
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(i18n.t('passwordMismatch')));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button
          shape="round"
          type="primary"
          htmlType="submit"
          block
        >
          {i18n.t('save')}
        </Button>

      </Form>
    </Card>
  );
};

export default ChangePassword;
