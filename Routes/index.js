//layout
import routes from '../config/routes';
//pages
import Home from '../Pages/Home';
import Browse from '../Pages/Browse';
import Favorite from '../Pages/Favorite';
import Library from '../Pages/Library';

//public routes

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.browse, component: Browse },
    { path: routes.favorite, component: Favorite },
    { path: routes.library, component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
