import { BankOutlined, CalendarOutlined, DollarCircleOutlined, FieldTimeOutlined, PlayCircleOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react'
import { API } from '../../helpers/api';
import { IMovieId, IPopularList } from '../../interfaces/movie.interface';
import style from './MovieListComponent.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Tabs } from 'antd';
import { CheckComp, MovieListGen, Pagination } from '../../components';
import { StoreContext } from '../../store.context';
import cn from 'classnames';
const { TabPane } = Tabs;
interface MovieListComponentProps {
    popularList: IPopularList[];
}

export const MovieListComponent = ({ popularList, ...props}:MovieListComponentProps) => {

    const {movieStore, authStore} = useContext (StoreContext);
    
  return (
    <div className={style.wrapper} style={{backgroundImage: `url('./banner02.jpg')`}}>
        <div className="container">
            <div className={style.contWrap}>
                <CheckComp/>
                <MovieListGen movieArr={popularList}/>
                <Pagination/>
            </div>
        </div>
    </div>
  )
}