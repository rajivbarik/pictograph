import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.foundImages.map(img =>{
        return <ImageCard key={img.id} image={img} />
    });

    return (
        <div className="image_list" >{images}</div>
    )
}

export default ImageList;