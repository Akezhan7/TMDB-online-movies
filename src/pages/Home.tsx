import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { MovieBox, MovieListComp, Title } from '../components'
import { StoreContext } from '../store.context';


interface HomeProps {
}

const Home = ({...props}:HomeProps) => {
  const {movieStore, authStore} = useContext (StoreContext);
  useEffect (() => {
    movieStore.stateSortTopRate = false;
    movieStore.stateSortPopular = false;
  }, [])
  return (
    <div className='home-wrapper' style={{backgroundImage: `url('./banner01.jpg')`}}>
         <div>
            <Title titleText='Забронировать билеты на' anim={true} texts={['Фильмы', 'Сериалы', 'События']}/>
            <MovieListComp title='Популярные' viewAll='popular' movieArr={movieStore.movies}/>
            <MovieListComp title='Топ рейтинга' viewAll='topRate' movieArr={movieStore.topRated}/>
         </div>
    </div>
  )
}

export default observer (Home)