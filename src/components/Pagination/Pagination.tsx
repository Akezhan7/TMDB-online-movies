import React, { DetailedHTMLProps, HTMLAttributes, useContext, useEffect, useState } from 'react'
import style from './Pagination.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../../store.context';

interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    
}

export const Pagination = ({...props}:PaginationProps) => {
  const {movieStore, authStore} = useContext (StoreContext);
  console.log (movieStore.movies.length)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(movieStore.movies.length / movieStore.moviePerPage); i++ ) {
    pageNumbers.push (i);
  }
  console.log (pageNumbers)
  return (
    <div>
        <ul className={style.pagination}>
            {pageNumbers.map (item => (
                <li key={uuidv4()}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}