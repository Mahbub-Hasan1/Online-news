import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LatestUpdate.css';

const updatesFakeData = [
    {
        id: 1,
        title: 'With supporting text below as a natural',
        img: 'https://i.imgur.com/LLEDPqf.jpg',
    },
    {
        id: 2,
        title: 'With supporting text below as a natural',
        img: 'https://i.imgur.com/qGqSPCY.jpg',
    },
    {
        id: 3,
        title: 'With supporting text below as a natural',
        img: 'https://i.imgur.com/oRyqsor.jpg',
    },
    {
        id: 4,
        title: 'With supporting text below as a natural',
        img: 'https://i.imgur.com/rz95K9j.jpg',
    },

]


const LatestUpdate = () => {
    const [updates, setUpdates] = useState(updatesFakeData)

    const history = useHistory();
    const ChangeRoute = () => {
        history.push('/d')
    }
    
    return (
        <div className="latest-update-area">
            <p className="text-center whatUp">WHAT'S UP</p>
            <h2 className="text-center latest-update">Latest Update</h2>
            <hr className="text-center update-hr" />
            <div className="row row-cols-1 row-cols-md-4">

                {
                    updates.map(update =>

                        <div key={update.id} className="col mb-4 col-sm-6">
                            <div className="card update-card">
                                <img src={update.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title update-title">{update.title}</h5>
                                    <p className="card-text">September 10/by Tanzim Khan</p>
                                    <h5 onClick={ChangeRoute} className="continue-read">Continue reading..</h5>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>

    );
};

export default LatestUpdate;