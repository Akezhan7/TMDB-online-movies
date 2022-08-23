import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withLayout } from './layout/Layout';
import AppRouter from './components/AppRouter/AppRouter';
import { StoreContext } from './store.context';
import { observer } from 'mobx-react-lite'
const App = observer (() => {
  const {movieStore, authStore} = useContext (StoreContext);
  useEffect (() => {
    movieStore.getMoviesList ();
    movieStore.getGenres ();
  }, [])
  return (
    <><AppRouter/></>
  );
})

export default withLayout (App);
