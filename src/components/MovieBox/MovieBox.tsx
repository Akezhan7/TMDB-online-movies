import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import style from './MovieBox.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { API } from '../../helpers/api';
import { useNavigate } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';

interface MovieBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  movieItem: IPopularList;
}

export const MovieBox = observer (({movieItem, ...props}:MovieBoxProps) => {
  const router = useNavigate ()
  return (
    <div className={style.box}>
      <div className={style.boxContainer} style={{backgroundImage: `url('${API.movie.img + movieItem.poster_path}')`}}>
          <div className={style.boxSecond}>
            <div className={style.average}>
              <span>{movieItem.vote_average}</span>
            </div>
            <div className={style.play}>
            <PlayCircleOutlined onClick={() => router(`/movie/${movieItem.id}`)} />
            </div>
             <div className={style.texts}>
                <div className={style.textsTitle}>{movieItem.title}</div>
                <div className={style.date}><span className={style.dateTitle}>Дата релиза : </span><span className={style.dateCount}>{movieItem.release_date}</span></div>
             </div>
          </div>
      </div>
    </div>
  )
})