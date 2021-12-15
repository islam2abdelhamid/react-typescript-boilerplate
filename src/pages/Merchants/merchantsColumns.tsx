import {
  Button, Space,
} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { MerchantsColumn } from './types';
import i18n from '../../i18n';

import 'antd/lib/space/style/css';
import 'antd/lib/button/style/css';

const columns = [
  {
    title: i18n.t('name'),
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: i18n.t('email'),
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: i18n.t('phone'),
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: i18n.t('category'),
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: i18n.t('icon'),
    dataIndex: 'icon',
    key: 'icon',
    render: (icon: string, record: MerchantsColumn) => (
      <img
        src={icon}
        alt={record.name}
        width={100}
      />
    ),
  },
  {
    title: i18n.t('actions'),
    render: (record:MerchantsColumn) => (
      <div>
        <Space size={20}>
          <Button type="primary" shape="round" onClick={() => console.log(record)}>
            <EditOutlined />
          </Button>
          <Button
            shape="round"
            danger
            onClick={() => console.log(record)}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      </div>
    ),
  },
];

export default columns;
