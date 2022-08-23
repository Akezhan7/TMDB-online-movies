import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { MovieBox, MovieListComp, Title } from '../components'
import { StoreContext } from '../store.context';
import { v4 as uuidv4 } from 'uuid';
import { MovieListComponent } from '../page-components';
interface PopularMoviesPageProps {
}

const PopularMoviesPage = ({...props}:PopularMoviesPageProps) => {
  const {movieStore, authStore} = useContext (StoreContext);

  useEffect (() => {
    movieStore.stateSortTopRate = false;
    movieStore.stateSortPopular = true;
  }, [])

  return (
    <div>
        <MovieListComponent popularList={movieStore.moviesFiltred}/>
    </div>
  )
}

export default observer (PopularMoviesPage)