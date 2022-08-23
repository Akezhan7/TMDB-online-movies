import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useState } from 'react'
import style from './MovieListComp.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';
import { observer } from 'mobx-react-lite';
import { IPopularList } from '../../interfaces/movie.interface';
import { MovieBox } from '../MovieBox/MovieBox';
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';

interface MovieListCompProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  viewAll: string;
  movieArr: IPopularList[];
}

export const MovieListComp = observer (({movieArr, title, viewAll,...props}:MovieListCompProps) => {
  
  const {movieStore, authStore} = useContext (StoreContext);

  const newMovieList = movieArr;
  // newMovieList.splice (8, movieArr.length)
  return (
    <div className={style.wrapper}>
      <div className={style.top}><div className={style.title}>{title}</div> <div className={style.link}><Link to={'/' + viewAll}>Смотреть Все</Link></div></div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, A11y]}
          className={cn ('mySwiper', style.boxWrapper)}
        >
           {movieStore.isLoading 
           ?  <><Spin size='large'/></>
           : <>{newMovieList.map (item => <SwiperSlide className={style.boxSlide} key={uuidv4()}><MovieBox movieItem={item}/></SwiperSlide>)}</>}
           </Swiper>
    </div>
    </div>
  )
})