import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './OurEvents.css';

const eventsFakeData = [
    {
        id: 1,
        title: 'hello, how are you viya 1',
        img: 'https://i.imgur.com/JBZspUm.jpg',
    },
    {
        id: 2,
        title: 'hello, how are you viya 1',
        img: 'https://i.imgur.com/JBZspUm.jpg',
    },
    {
        id: 3,
        title: 'hello, how are you viya 1',
        img: 'https://i.imgur.com/JBZspUm.jpg',
    },
    {
        id: 4,
        title: 'hello, how are you viya 1',
        img: 'https://i.imgur.com/JBZspUm.jpg',
    },

]

const OurEvents = () => {
    const [events, setEvents] = useState(eventsFakeData)

    const history = useHistory();
    const ChangeRoute = () => {
        history.push('/d')
    }
    return (
        <div className="events-div">
            <h2>our events...</h2>
            <div className="row row-cols-1 row-cols-md-4">

                {
                    events.map(event =>

                        <div key={event.id} onClick={ChangeRoute} className="col mb-4 card-style col-sm-6">
                            <div className="card event-card">
                                <img src={event.img} className="card-img-top event-card-img" alt="..." />
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