import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import style from './MovieCard.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { API } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

interface MovieCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  movieItem: IPopularList;
}

export const MovieCard = observer (({movieItem, ...props}:MovieCardProps) => {
  const router = useNavigate ()
  return (
    <div className={style.box}>
        <div className={style.img} onClick={() => router(`/movie/${movieItem.id}`)}><div className={style.average}>{movieItem.vote_average}</div><img src={API.movie.img + movieItem.poster_path} alt="" /></div>
        <div className={style.info}>
          <div className={style.infoTitle} onClick={() => router(`/movie/${movieItem.id}`)}>{movieItem.title}</div>
          <div className={style.infoTime}><span>Дата резила : </span><span>{movieItem.release_date}</span></div>
          <div className={style.infoDescr}><span>Описание</span><div>{movieItem.overview.slice(0, 105)}...</div></div>
          <div className={style.by}>Купить билет</div>
        </div>
    </div>
  )
})