import React, { useEffect, useState } from 'react';
import './PhotoGallery.css';
import Gallery from 'react-grid-gallery';


const PhotoGallery = () => {
    const [PhotoData, setPhotoData] = useState()

    useEffect(() => {
        fetch('http://localhost:5050/AllPhotoGalleryData')
            .then(res => res.json())
            .then(data => setPhotoData(data))
    }, [])


    return (
        <>
            {
                PhotoData ?
                    <div className="photo-Gallery-area">
                        <h2 className="photo-hade-line">Photo Gallery</h2>
                        <hr className="gallery-hr" />

                        <div className="photo-gallery">
                            <Gallery images={PhotoData} />
                        </div>

                    </div>
                    : ''
            }
        </>
    );
};

export default PhotoGallery;