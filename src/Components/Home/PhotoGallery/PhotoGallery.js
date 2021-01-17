import React from 'react';
import './PhotoGallery.css';
import Gallery from 'react-grid-gallery';


const IMAGES =
    [{
        src: "https://i.imgur.com/OzbRwrT.jpg",
        thumbnail: "https://i.imgur.com/OzbRwrT.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://i.imgur.com/uSBMIs5.jpg",
        thumbnail: "https://i.imgur.com/uSBMIs5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://i.imgur.com/FF4mx43.jpg",
        thumbnail: "https://i.imgur.com/FF4mx43.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/RxbZ44w.jpg",
        thumbnail: "https://i.imgur.com/RxbZ44w.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/rrya10B.jpg",
        thumbnail: "https://i.imgur.com/rrya10B.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/5bSmh3o.jpg",
        thumbnail: "https://i.imgur.com/5bSmh3o.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/gROkdCa.jpg",
        thumbnail: "https://i.imgur.com/gROkdCa.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/Yh5bdVv.jpg",
        thumbnail: "https://i.imgur.com/Yh5bdVv.jpg",
        thumbnailWidth: 330,
        thumbnailHeight: 212
    },
    ]

const PhotoGallery = () => {

    return (
        <div className="photo-Gallery-area">
            <h2 className="photo-hade-line">Photo Gallery</h2>
            <hr className="gallery-hr" />
            <div className="photo-gallery">
                <Gallery images={IMAGES} />
            </div>
        </div>
    );
};

export default PhotoGallery;