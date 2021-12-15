import { FC } from 'react';

import { useHistory } from 'react-router-dom';

import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

import { CategoriesColumn } from './types';
import columns from './categoriesColumns';
import i18n from '../../i18n';

import 'antd/lib/typography/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';

const data:CategoriesColumn[] = [
  {
    key: '232',
    name: 'Category 1',
    parent: 'Parent Category',
    icon: 'https://loremflickr.com/640/360',
  },
];
const Categories: FC = () => {
  const history = useHistory();
  return (
    <>
      <Row justify="space-between">
        <Col span={6}><Title level={2}>{ i18n.t('categories')}</Title></Col>
        <Col span={2}>
          <Button
            shape="round"
            type="primary"
            onClick={() => history.push('/categories/add')}
          >
            {i18n.t('newCategory')}
          </Button>
        </Col>
      </Row>
      <Table<CategoriesColumn> columns={columns} dataSource={data} />
    </>
  );
};

export default Categories;
