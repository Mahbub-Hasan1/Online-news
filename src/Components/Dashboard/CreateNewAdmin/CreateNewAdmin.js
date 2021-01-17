import React from 'react';
import { useForm } from "react-hook-form";

const CreateNewAdmin = () => {

    const { register, handleSubmit } = useForm();

    // post new admin
    const onSubmit = adminData => {
        fetch('http://backend.dkshomiti.com/addNewAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("successfully")
                }
            })
            .catch(error => {
                console.error(error)
            })
    };



    return (
        <div className="container">
            <h5 style={{fontWeight:'bold', color:'#00A651'}}>Add new admin</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="newAdmin" ref={register} required placeholder="Add new admin email" className="registration-form" style={{ border: '2px solid #00A651', width: '100%', fontWeight: 'bold', fontSize:'20px', color:'#00A651' }} />
                <input type="submit" required placeholder="সাবমিট" className="registration-form" style={{ background: '#00A651', width: '100%', fontWeight: 'bold', color:'#fff', fontSize:'20px' }} />
            </form>
        </div>
    );
};

export default CreateNewAdmin;