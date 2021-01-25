import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser } = useContext(UserContext)

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5050/allAdmin?newAdmin=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            }
            )
    }, [admin])

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