import React, { useEffect, useState } from 'react';
import './UpdateSlider.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from "react-hook-form";

const UpdateSlider = () => {
    const [ImgData, setData] = useState([]);

    const { register, handleSubmit } = useForm();



    const [amtiInput, setamtiInput] = useState()
    //post images data
    const onSubmit = FormData => {

        fetch('http://localhost:5050/AddSliderImages', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(FormData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("successfully")
                    setamtiInput('')
                }
            })
            .catch(error => {
                console.error(error)
            })
            
    };

    //get images data


    useEffect((ImgData) => {
        fetch('http://localhost:5050/allSliderImages')
            .then(res => res.json())
            .then(data => setData(data))
    }, [ImgData])


    //delete images data
    const deleteImage = (_id) => {
        fetch(`http://localhost:5050/ImageDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className="container">

            <h5>Update Slider images</h5>

            <div className="row">
                {
                    ImgData.map(iData =>

                        <div key={iData._id} className="img-card col-md-6">
                            <div className="row Preview-img-div align-items-center">
                                <div className="col-6">
                                    <img className="img-fluid update-img" src={iData.src} alt="img" />
                                </div>

                                <div className="col-6">
                                    <h4 className="img-title text-center">
                                        ID: {iData.id}
                                        <DeleteIcon onClick={() => deleteImage(iData._id)} style={{ fontSize: '40px' }} className="deleteImgIcon" />
                                    </h4>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

            <br /><br />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-4 row">
                    <input type="text" name="src" ref={register} required defaultValue={amtiInput} className="form-control img-url-input col-sm-9" placeholder="Img url" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input type="text" name="id" ref={register} required defaultValue={amtiInput} className="form-control img-url-input col-sm-3" placeholder="img id example: 1" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateSlider;