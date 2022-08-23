import { BankOutlined, CalendarOutlined, DollarCircleOutlined, FieldTimeOutlined, PlayCircleOutlined } from '@ant-design/icons';
import React from 'react'
import { API } from '../../helpers/api';
import { IMovieId } from '../../interfaces/movie.interface';
import style from './MovieDetaildComponent.module.scss';
import { v4 as uuidv4 } from 'uuid';
interface MovieDetaildComponentProps {
    movieCard: IMovieId;
}

export const MovieDetaildComponent = ({movieCard, ...props}:MovieDetaildComponentProps) => {
  return (
    <div className={style.wrapper}>
        <div className={style.banner} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movieCard.backdrop_path}')`}}><PlayCircleOutlined /></div>
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.infoImg}><img src={API.movie.img + movieCard.poster_path} alt="" /></div>
                <div className={style.infoText}>
                    <div className={style.infoTitle}>{movieCard.title}</div>
                    <div className={style.detailsWrap}>
                        <div className={style.detailsItem}><CalendarOutlined /> <span>{movieCard.release_date}</span></div>
                        <div className={style.detailsItem}><BankOutlined /> {movieCard.production_countries?.map(item => <span key={uuidv4()}>{item.name}</span>)}</div>
                        <div className={style.detailsItem}><FieldTimeOutlined /><span>{movieCard.runtime} min</span></div>
                    </div>
                    <div className={style.book}><DollarCircleOutlined /><span>Забронировать билеты</span></div>
                </div>
            </div>
            <div className={style.description}><div className={style.descriptionTitle}>Описание</div><span>{movieCard.overview}</span></div>
        </div>
    </div>
  )
}