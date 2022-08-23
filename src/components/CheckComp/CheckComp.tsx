import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import style from './CheckComp.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { API } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

interface CheckCompProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CheckComp = observer (({...props}:CheckCompProps) => {

  const {movieStore, authStore} = useContext (StoreContext);
  
  return (
    <div className={style.wrapper}>
          <div className={style.title}>Жанры</div>
          <div className={style.content}>
              {movieStore.genres.genres?.map (item => (
                <div key={uuidv4()} className={style.itemCheck}><Checkbox>{item.name}</Checkbox></div>
              ))}
          </div>
    </div>
  )
})