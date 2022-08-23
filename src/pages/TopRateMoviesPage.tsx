import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { MovieBox, MovieListComp, Title } from '../components'
import { StoreContext } from '../store.context';
import { v4 as uuidv4 } from 'uuid';
import { MovieListComponent } from '../page-components';
interface MoviesAllProps {
}

const TopRateMoviesPage = ({...props}:MoviesAllProps) => {
  const {movieStore, authStore} = useContext (StoreContext);

  useEffect (() => {
    movieStore.stateSortPopular = false;
    movieStore.stateSortTopRate = true;
  }, [])

  return (
    <div>
        <MovieListComponent popularList={movieStore.topRatedFiltred}/>
    </div>
  )
}

export default observer (TopRateMoviesPage)