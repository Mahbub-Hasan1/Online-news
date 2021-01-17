import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser, adminData, setAdminData } = useContext(UserContext)

    useEffect(() => {
        fetch('http://backend.dkshomiti.com/AllAdminData')
            .then(res => res.json())
            .then(data => setAdminData(data))
    }, [])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;