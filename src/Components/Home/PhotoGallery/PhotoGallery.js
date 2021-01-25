import React from 'react';
import './PhotoGallery.css';
import Gallery from 'react-grid-gallery';


const IMAGES =
    [{
        src: "https://i.imgur.com/oHLxC92.jpg",
        thumbnail: "https://i.imgur.com/oHLxC92.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://i.imgur.com/52C3W7D.jpg",
        thumbnail: "https://i.imgur.com/52C3W7D.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://i.imgur.com/TLWeHvy.jpg",
        thumbnail: "https://i.imgur.com/TLWeHvy.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/7s5fn5e.jpg",
        thumbnail: "https://i.imgur.com/7s5fn5e.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/tFrlAZ2.jpg",
        thumbnail: "https://i.imgur.com/tFrlAZ2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/z8EmFlY.jpg",
        thumbnail: "https://i.imgur.com/z8EmFlY.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/BiuIbKW.jpg",
        thumbnail: "https://i.imgur.com/BiuIbKW.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://i.imgur.com/9ywiLhc.jpg",
        thumbnail: "https://i.imgur.com/9ywiLhc.jpg",
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