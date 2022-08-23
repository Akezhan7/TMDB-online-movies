import Home from "../pages/Home";
import Login from "../pages/Login";
import PopularMoviesPage from "../pages/PopularMoviesPage";
import PagePopular from "../pages/PagePopular";
import PageSearch from "../pages/PageSearch";
import TopRateMoviesPage from "../pages/TopRateMoviesPage";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export const publicRoutes: IRoute[] = [
    {path: '/login', element: Login}
]

export const privateRoutes: IRoute[] = [
    {path: '/', element: Home},
    {path: '/popular', element: PopularMoviesPage},
    {path: '/topRate', element: TopRateMoviesPage},
    {path: '/movie/:id', element: PagePopular},
    {path: '/search', element: PageSearch},
]