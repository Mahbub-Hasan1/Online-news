import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1>This Page Not Found</h1>
            <Link to="/">
                <button>Back to home page</button>
            </Link>
        </div>
    );
};

export default PageNotFound;