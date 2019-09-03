import React from 'react';

const ImageList = (props) => {
    const images = props.foundImages.map(img =>{
        return <img key={img.id} src={img.urls.regular}
        alt={img.alt_description} />
    })

    return (
        <div>{images}</div>
    )
}

export default ImageList;