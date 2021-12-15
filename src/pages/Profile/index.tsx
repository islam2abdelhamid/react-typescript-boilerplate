import {
  FC,
} from 'react';
import { UploadOutlined } from '@ant-design/icons';

import Title from 'antd/lib/typography/Title';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Upload from 'antd/lib/upload';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';

import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/card/style/css';

const { Option } = Select;

const Profile: FC = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Title level={2}>{i18n.t('profile')}</Title>
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
        title={i18n.t('profile')}
        layout="vertical"
        name="user_form"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label={i18n.t('name')}
          rules={[{ required: true, message: i18n.t('required', { label: i18n.t('name') }) }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label={i18n.t('email')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('email') }) },
            { type: 'email', message: i18n.t('users:invalidEmail') },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="categories"
          label={i18n.t('categories')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('categories') }) },
          ]}
        >
          <Select>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="branches"
          label={i18n.t('branches')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('branches') }) },
          ]}
        >
          <Select mode="tags" />
        </Form.Item>

        <Form.Item
          name="logo"
          label={i18n.t('logo')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('logo') }) },
          ]}
        >
          <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
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

export default Profile;
