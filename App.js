import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import DefaultLayout from './layouts/DefaultLayout';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from './Pages/auth/login';
import { setClientToken } from './api/ApiSpotify';
import { getToken } from './redux2/actions';

function App() {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const hash = window.location.hash;
        window.location.hash = '';
        if (!token && hash) {
            const _token = hash.split('&')[0].split('=')[1];
            window.localStorage.setItem('token', _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
            // dispatch(getToken(token));
        }
    }, []);

    return !token ? (
        <Login />
    ) : (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
