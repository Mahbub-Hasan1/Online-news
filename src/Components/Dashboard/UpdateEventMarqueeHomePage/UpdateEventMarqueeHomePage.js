import React from 'react';
import { useForm } from "react-hook-form";

const UpdateEventMarqueeHomePage = () => {
    const { register, handleSubmit } = useForm();


    // update event marquee
    const onSubmit = e => {

        const _id = '600c86c5e185d95640d72d27';
        fetch(`http://localhost:5050/updateEventMarqueeHomPage/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventMarquee: e.eventMarquee })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('event marquee updated successfully')
                }
            })
    };



    return (
        <div className="container">
            <h5>Update Event Marquee Home Page</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="eventMarquee" ref={register} required placeholder="update event marquee home page" className="registration-form" style={{ border: '2px solid #00A651', width: '100%', fontWeight: 'bold', fontSize: '20px', color: '#00A651' }} />
                <input type="submit" required placeholder="সাবমিট" className="registration-form" style={{ background: '#00A651', width: '100%', fontWeight: 'bold', color: '#fff', fontSize: '20px' }} />
            </form>
        </div>
    );
};

export default UpdateEventMarqueeHomePage;