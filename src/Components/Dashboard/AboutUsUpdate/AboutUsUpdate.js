import React from 'react';
import { useForm } from "react-hook-form";


const AboutUsUpdate = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = e => {

        const _id = '600cb88c0998d332d453d37f';
        fetch(`http://localhost:5050/updateAboutUsHomPage/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aboutText: e.aboutText })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('about Text updated successfully')
                }
            })
    };

    return (
        <div className="container">
            <h5>Update about us details</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="aboutText" ref={register} required placeholder="update about us details" className="registration-form" style={{ border: '2px solid #00A651', width: '100%', fontWeight: 'bold', fontSize: '20px', color: '#00A651' }} />
                <input type="submit" required placeholder="সাবমিট" className="registration-form" style={{ background: '#00A651', width: '100%', fontWeight: 'bold', color: '#fff', fontSize: '20px' }} />
            </form>
        </div>
    );
};

export default AboutUsUpdate;