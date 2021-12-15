import { useState, FC } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';

import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import 'antd/lib/layout/style/css';
import Menu from 'antd/lib/menu';
import {
  AppstoreOutlined,
  DollarCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import 'antd/lib/menu/style/css';
import styles from './layout.module.scss';
import i18n from '../../i18n';
import ProfileMenu from '../../components/ProfileMenu';

const {
  Header, Content, Sider,
} = Layout;

const AppLayout: FC = ({ children }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const { md } = useBreakpoint();
  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsedWidth={md ? 80 : 0}
        trigger={md && null}
      >
        <div className={`${styles['logo-container']} 
        ${collapsed ? styles['logo-container--collapsed'] : ''}`}
        >
          <img src="/logo.png" alt="logo" width="200" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[history.location.pathname]}
          defaultOpenKeys={[`/${history.location.pathname.split('/')[1]}`]}
        >
          <Menu.Item key="/categories" icon={<AppstoreOutlined />}>
            <Link to="/categories">{i18n.t('categories')}</Link>
          </Menu.Item>
          <Menu.Item key="/merchants" icon={<DollarCircleOutlined />}>
            <Link to="/merchants">{i18n.t('merchants')}</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header className={`${styles.header} ${collapsed ? styles['header--collapsed'] : ''}`}>
          {md && (
            <Button type="primary" onClick={() => setCollapsed((c) => !c)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          )}
          <div className={styles['profile-menu']}>
            <ProfileMenu />
          </div>
        </Header>
        <Content className={`${styles.content}  ${collapsed ? styles['content--collapsed'] : ''}`}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppLayout);
