import React, { DetailedHTMLProps, HTMLAttributes, useContext, useState } from 'react'
import style from './Header.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import User from './user.png';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite'
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = observer (({...props}:HeaderProps):JSX.Element => {
  const {movieStore, authStore} = useContext (StoreContext);
  const [modalVisible, setModalVisible] = useState<boolean> (false);
  const [query, setQuery] = useState ('');
  const navigate = useNavigate ();
  const onFinish = () => {
    // localStorage.setItem ('search', query)
    movieStore.getSearchQuery (query)
    setModalVisible(false);
    navigate ('/search');
  }

  return (
      <div {...props}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <div className={style.logo}><Link to={'/'}><img src={Logo} alt="logo" /></Link></div>
            <div className={style.nav}>
              <Link to={'#'}><span className={style.active}>Главная</span></Link>
              <Link to={'#'}><span >Фильмы</span></Link>
              <Link to={'#'}><span >Сериалы</span></Link>
            </div>
            <div className={style.search} onClick={() => setModalVisible(true)}><SearchOutlined /><span>Поиск</span></div>
            <div className={style.join}>
                <span>Войти</span>
            </div>
          </div>
        </div>
        <Modal title="Поиск фильмов" visible={modalVisible} onCancel={() => setModalVisible (false)} footer={null}>
            <Form onFinish={onFinish}>
              <Form.Item
                label="Поиск..."
                name="search"
                rules={[{ required: true, message: 'Введите название фильма' }]}
              >
                <Input onChange={e => setQuery (e.target.value)} value={query}/>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Поиск
                </Button>
              </Form.Item>
         </Form>
        </Modal>
      </div>
  )
})