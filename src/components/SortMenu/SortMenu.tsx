import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import style from './SortMenu.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { API } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Checkbox, Input, Select } from 'antd';

interface SortMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const SortMenu = observer (({...props}:SortMenuProps) => {

  const {movieStore, authStore} = useContext (StoreContext);
  const [selectedSort, setSelectedSort] = useState ('');
  const [searchQuery, setSearchQuery] = useState ('');

  useEffect (() => {
    if (movieStore.stateSortPopular) {
      movieStore.sortedMovies (selectedSort);
      movieStore.searchAndFilterPopular (searchQuery);
      return function cleanup () {
        movieStore.sortedMovies ('');
        movieStore.searchAndFilterPopular ('');
      }
    } else if (movieStore.stateSortTopRate) {
      movieStore.sortedTopRate (selectedSort)
      movieStore.searchAndFilterTopRate (searchQuery);
      return function cleanup () {
        movieStore.sortedTopRate ('');
        movieStore.searchAndFilterTopRate ('');
      }
    }
    
  }, [selectedSort, searchQuery])


  return (
    <div className={style.wrapper}>
           <div className={style.block}>
            <span>Показывать :</span>
            <Select defaultValue="12" style={{ width: 120 }}>
              <Select.Option value="12">12</Select.Option>
              <Select.Option value="15">15</Select.Option>
              <Select.Option value="21">21</Select.Option>
            </Select>
           </div>
           <div className={style.block}>
            <span>Сортировать по :</span>
            <Select defaultValue="Названию" style={{ width: 120 }} onChange={e => setSelectedSort(e)}>
              <Select.Option value="name">Названию</Select.Option>
              <Select.Option value="descr">Описанию</Select.Option>
              <Select.Option value="rate">Рейтингу</Select.Option>
            </Select>
           </div>
           <div className={style.block}>
            <span>Поиск :</span>
              <Input placeholder="введите название фильма..." onChange={e => setSearchQuery (e.target.value)} value={searchQuery}/>
           </div>
    </div>
  )
})