import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../helpers/api';
import { MovieDetaildComponent } from '../page-components';
import { StoreContext } from '../store.context';

function PostPage () {
    const {movieStore, authStore} = useContext (StoreContext);
    const params = useParams ();
    useEffect (() => {
        if (params.id) {
            movieStore.getMovieId (params.id)
        }
    }, [])
      return (
        <div className='page-layout-wrapper'>
          {movieStore.isLoading 
          ? <Spin size='large'/>
          : <>
              <MovieDetaildComponent movieCard={movieStore.movieDetaild}/>
            </>
          }
        </div>
      );
}

export default observer(PostPage);