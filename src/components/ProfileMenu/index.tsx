import { FC, useState } from 'react';
import Dropdown from 'antd/lib/dropdown';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Avatar from 'antd/lib/avatar';
import Menu from 'antd/lib/menu';
import {
  SettingOutlined,
  CaretDownFilled, LogoutOutlined, UserOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import i18n from '../../i18n';

import 'antd/lib/dropdown/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/avatar/style/css';
import 'antd/lib/space/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/spin/style/css';

import styles from './ProfileMenu.module.scss';

const ProfileMenu: FC = () => {
  const [visible, setVisible] = useState(false);

  const menu = (
    <Menu onClick={() => setVisible(false)} className={styles.menu}>
      <Menu.Item
        className={`${styles['menu-item']}`}
        key="0"
        icon={<UserOutlined />}
      >
        <Link to="/profile">{i18n.t('profile')}</Link>
      </Menu.Item>
      <Menu.Item
        className={`${styles['menu-item']}`}
        key="1"
        icon={<SettingOutlined />}
      >
        <Link to="/change_password">{i18n.t('changePassword')}</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        className={`${styles['menu-item']} ${styles.logout}`}
        key="3"
        icon={<LogoutOutlined />}
      >
        {i18n.t('logout')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        trigger={['click']}
        onVisibleChange={setVisible}
        overlay={menu}
        placement="bottomRight"
        arrow
      >
        <Space className={styles['profile-menu-container']} size={0}>
          <Avatar className={styles.avatar} size={40} icon={<UserOutlined />} />
          <Button
            shape="round"
            style={{
              padding: '0',
            }}
            type="text"
          >
            <span className={visible ? styles.rotate : ''}>
              username
              {/* {`${user.data?.fullname}`} */}
              <CaretDownFilled className={styles.caret} />
            </span>
          </Button>
        </Space>
      </Dropdown>
    </div>
  );
};

export default ProfileMenu;
