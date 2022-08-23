import React from "react";
import { AuthStore } from "./store/auth.store";
import { MovieStore } from "./store/movie.store";

interface IStoreContext {
    authStore: AuthStore;
    movieStore: MovieStore;
}

const authStore = new AuthStore ();
const movieStore = new MovieStore ();


export const StoreContext = React.createContext<IStoreContext> ({
    authStore,
    movieStore
})