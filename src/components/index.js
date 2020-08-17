import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import routes from '../Routes/routes';

const IndexComponent = () => {
    return (
        <Home>
            {routes.map((route, indx) => (
                <Route
                    exact
                    path={route.path}
                    component={route.component}
                    key={indx}
                />
            ))}
        </Home>
    )
}

export default IndexComponent;