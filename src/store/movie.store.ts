import {makeAutoObservable} from 'mobx'
import axios from 'axios';
import { IGenre, IMovieId, IPopularList } from '../interfaces/movie.interface';
import { API } from '../helpers/api';

export class MovieStore {

    movies = [] as IPopularList[];
    moviesFiltred =[] as IPopularList[];
    topRated = [] as IPopularList[];
    topRatedFiltred = [] as IPopularList[];
    movieDetaild = {} as IMovieId;
    movieSearch = [] as IPopularList[];
    genres = {} as IGenre;
    stateSortPopular = false;
    stateSortTopRate = false;
    isLoading = false;

    currentPage = 1;
    moviePerPage = 10;

    lastMovieIndex = this.currentPage * this.moviePerPage;
    firstMovieIndex = this.lastMovieIndex  - this.moviePerPage;
    currentMovie = this.movies.slice (this.firstMovieIndex, this.lastMovieIndex);

    constructor () {
        makeAutoObservable (this);
    }

    getMoviesList = async () => {
        try {
            this.isLoading = true;
            const popular = await axios.get (API.movie.popular);
            this.movies = popular.data.results;
            const topRated = await axios.get (API.movie.topRated);
            this.topRated = topRated.data.results;
            this.moviesFiltred = this.movies;
            this.topRatedFiltred = this.topRated;
            this.isLoading = false;
        } catch (e) {
            console.log (e);
        }
    }
    
    getMovieId = async (id: string) => {
        try {
            this.isLoading = true;
            const details = await axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=0ee76018824e9da7768bafa311bbe18d&language=ru`);
            this.movieDetaild = details.data;
            console.log (this.movieDetaild)
            this.isLoading = false;
        } catch (e) {
            console.log (e);
        }
    }

    getSearchQuery = async (query: string) => {
        try {
            this.isLoading = true;
            const resQuery = await axios.get (API.movie.search + query);
            this.movieSearch = resQuery.data.results;
            this.isLoading = false;
        } catch (e) {
            console.log (e);
        }
    }
    
    getGenres = async () => {
        try {
            const resQuery = await axios.get (API.movie.genres);
            this.genres = resQuery.data;
        } catch (e) {
            console.log (e);
        }
    }

    sortedMovies = (value: string) => {
        if (value === 'name') {
            this.movies = [...this.movies].sort ((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'descr') {
            this.movies = [...this.movies].sort ((a, b) => a.overview.localeCompare(b.overview))
        } else if (value === 'rate') {
            this.movies = [...this.movies].sort ((a, b) => b.vote_average - a.vote_average)
        }
    }
    sortedTopRate = (value: string) => {
        if (value === 'name') {
            this.topRated = [...this.topRated].sort ((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'descr') {
            this.topRated = [...this.topRated].sort ((a, b) => a.overview.localeCompare(b.overview))
        } else if (value === 'rate') {
            this.topRated = [...this.topRated].sort ((a, b) => b.vote_average - a.vote_average)
        }
    }

    searchAndFilterPopular = (query: string) => {
        setTimeout (() => {
            this.moviesFiltred =  this.movies.filter (item => item.title.toLowerCase().includes(query.toLowerCase()));
        }, 300)
    }
    searchAndFilterTopRate = (query: string) => {
        setTimeout (() => {
            this.topRatedFiltred =  this.topRated.filter (item => item.title.toLowerCase().includes(query.toLowerCase()));
        }, 300)
    }
    
}