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
            <div class="row row-cols-1 row-cols-md-4">

                {
                    events.map(event =>

                        <div onClick={ChangeRoute} class="col mb-4 card-style">
                            <div class="card event-card">
                                <img src={event.img} class="card-img-top event-card-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{event.title}</h5>
                                    <p class="card-text">This is a longer....</p>
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