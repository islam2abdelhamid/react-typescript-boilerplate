import { FC } from 'react';

import { useHistory } from 'react-router-dom';

import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

import { MerchantsColumn } from './types';
import columns from './merchantsColumns';
import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';

const data:MerchantsColumn[] = [
  {
    key: '232',
    name: 'merchant 1',
    category: 'category1',
    email: 'islam@admin.com',
    phone: '+20242438593',
    icon: 'https://loremflickr.com/640/360',
  },
];
const Merchants: FC = () => {
  const history = useHistory();
  return (
    <>
      <Row justify="space-between">
        <Col span={6}><Title level={2}>{ i18n.t('merchants')}</Title></Col>
        <Col span={2}>
          <Button
            shape="round"
            type="primary"
            onClick={() => history.push('/merchants/add')}
          >
            {i18n.t('newMerchant')}
          </Button>
        </Col>
      </Row>
      <Table<MerchantsColumn> columns={columns} dataSource={data} />
    </>
  );
};

export default Merchants;
