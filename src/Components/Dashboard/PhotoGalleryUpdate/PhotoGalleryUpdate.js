import React, { useEffect, useState } from 'react';
import './PhotoGalleryUpdate.css';
import { useForm } from "react-hook-form";
import Axios from 'axios';

const PhotoGalleryUpdate = () => {
    const [PhotoData, setPhotoData] = useState()
    const [uploadImgUrl, setUploadImgUrl] = useState({});

    useEffect(() => {
        fetch('http://localhost:5050/AllPhotoGalleryData')
            .then(res => res.json())
            .then(data => setPhotoData(data))
    }, [PhotoData])



    const onSubmit = _id => {


        const latestDetailsFromData = { ...uploadImgUrl };

        console.log(latestDetailsFromData)
  
        fetch(`http://localhost:5050/updatePhotoGalleryData/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(latestDetailsFromData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('latest Details updated successfully')
                }
            })
    };

    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '2f47761ebe19b643e50f810bd1150248')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }

    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {
                const imageUrl = {}
                imageUrl.src = resp.data.data.thumb.url;
                imageUrl.thumbnail = resp.data.data.thumb.url;
                setUploadImgUrl(imageUrl);

            })
        e.preventDefault();
    }



    return (
        <div className="photo-gallery-area">
            <div className="row justify-content-center">

                {
                    PhotoData ? PhotoData.map(photo =>
                        <div className="col-md-3 Photo-gallery-update-card">
                            <h5>hello1</h5>
                            <img className="Gallery-img-update" src={photo.src} alt="img" />
                            

                            <input type="file" onChange={upload} />
                            <button onClick={() => onSubmit(photo._id)}>Update img</button>


                        </div>
                    )

                        :
                        ''
                }



            </div>
        </div>
    );
};

export default PhotoGalleryUpdate;