import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieListSearch } from '../components';
import { API } from '../helpers/api';
import { MovieDetaildComponent } from '../page-components';
import { StoreContext } from '../store.context';

function PageSearch () {
    const {movieStore, authStore} = useContext (StoreContext);
    // const [localQuery, setLocalQuery] = useState ('');
    // useEffect (() => {
    //     movieStore.getSearchQuery (localQuery)
    // }, [localQuery])
      return (
        <div className='page-search-wrapper'>
          <div className="title-search-pages">Результаты:</div>
          <MovieListSearch movieArr={movieStore.movieSearch}/>
        </div>
      );
}

export default observer(PageSearch);