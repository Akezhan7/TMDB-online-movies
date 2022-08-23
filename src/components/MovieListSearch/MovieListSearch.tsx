import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import style from './MovieListSearch.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { MovieBox } from '../MovieBox/MovieBox';
import { Spin } from 'antd';

interface MovieListSearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  movieArr: IPopularList[];
}

export const MovieListSearch = observer (({movieArr,...props}:MovieListSearchProps) => {
  
  const {movieStore, authStore} = useContext (StoreContext);

  return (
    <div className={style.wrapper}>
        {movieArr.length
        ? <>
            {movieStore.isLoading 
            ? <><Spin size='large'/></>
            : <>{movieArr.map (item => 
                  <MovieBox key={uuidv4()} movieItem={item}/>
                )}
              </>
            }
          </>
        : <div className={style.err}>Пусто...</div>
        }
    </div>
  )
})