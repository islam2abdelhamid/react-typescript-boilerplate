import {
  FC,
} from 'react';

import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';

import Upload from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';

import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/card/style/css';
import 'antd/lib/select/style/css';

const { Option } = Select;

const categories = [
  {
    name: 'Category1',
    subcategories: ['subcategory1', 'subcategory2', 'subcategory3'],
  },
  {
    name: 'Category2',
    subcategories: ['Category2 subcategory1', 'Category2 subcategory2', 'Category2 subcategory3'],
  },
  {
    name: 'Category3',
    subcategories: ['Category3 subcategory1', 'Category3 subcategory2', 'Category3 subcategory3'],
  },
];

const MerchantsForm: FC = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Title level={2}>{i18n.t('merchants')}</Title>
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
        name="merchants_form"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label={i18n.t('name')}
          rules={[{
            required: true,
          }, { max: 50 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label={i18n.t('email')}
          rules={[{
            required: true,
          }, { type: 'email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label={i18n.t('phone')}
          rules={[{
            required: true,
          },
          {
            validator(rule, value, callback) {
              const regEx = /^[+]?\d+$/;
              if (value.match(regEx)) {
                return callback();
              }
              return callback(i18n.t('invalidPhone'));
            },
          },
          ]}
        >
          <Input />
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

        <Form.Item
          name="category"
          label={i18n.t('category')}
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('category') }) },
          ]}
        >
          <Select>
            {categories.map(({ name }) => <Option value={name} key={name}>{name}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.category
          !== currentValues.category}
        >
          {({ getFieldValue, setFieldsValue }) => {
            const parentCategory = getFieldValue('category');
            if (!parentCategory) return null;
            const currentCategory = categories.find((cat) => cat.name === parentCategory);
            if (currentCategory) {
              return (
                <Form.Item
                  name="subcategory"
                  label={i18n.t('subcategory')}
                >
                  <Select>
                    {currentCategory.subcategories.map((subcat: string) => (
                      <Option
                        value={subcat}
                        key={subcat}
                      >
                        {subcat}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              );
            }
          }}
        </Form.Item>

        <Form.Item
          name="password"
          label={i18n.t('password')}
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: i18n.t('required', { label: i18n.t('password') }) },
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
          dependencies={['password']}
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

export default MerchantsForm;
