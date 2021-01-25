import React, { useEffect, useState } from 'react';
import ModalOurEventUpdate from './ModalOurEventUpdate';

const OurEvent = () => {
    const [events, setEvents] = useState()

    useEffect(() => {
        fetch('http://localhost:5050/AllOurEventHomePage')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [events])

    return (
        <div className="events-div">
            <h2>update our events...</h2>
            <div className="row row-cols-1 row-cols-md-4">

                {
                    events ? events.map(event =>

                        <div key={event._id} className="col mb-4 card-style col-sm-6">
                            <div className="card event-card">

                                <img
                                    src={event.img}
                                    className="card-img-top event-card-img"
                                    alt="..."
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.eventDetails}</p>
                                </div>

                                <div className="text-center">
                                    <ModalOurEventUpdate event={event}></ModalOurEventUpdate>
                                </div>
                            </div>

                        </div>


                    )
                        : ''
                }
            </div>
        </div>
    );
};

export default OurEvent;