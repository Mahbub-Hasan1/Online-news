import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './OurEvents.css';

const eventsFakeData = [
    {
        id: 1,
        title: 'hello, how are you viya 1',
        img: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377_960_720.jpg',
    },
    {
        id: 2,
        title: 'hello, how are you viya 1',
        img: 'https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476__340.jpg',
    },
    {
        id: 3,
        title: 'hello, how are you viya 1',
        img: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg',
    },
    {
        id: 4,
        title: 'hello, how are you viya 1',
        img: 'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg',
    },

]

const OurEvents = () => {

    const [events] = useState(eventsFakeData)

    const history = useHistory();

    const ChangeRoute = () => {
        history.push('/')
    }


    return (
        <div className="events-div">
            <h2>our events...</h2>
            <div className="row row-cols-1 row-cols-md-4">

                {
                    events.map(event =>

                        <div key={event.id} onClick={ChangeRoute} className="col mb-4 card-style col-sm-6">
                            <div className="card event-card">

                                <img
                                    src={event.img}
                                    className="card-img-top event-card-img"
                                    alt="..."
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">This is a longer....</p>
                                </div>

                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default OurEvents;