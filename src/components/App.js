import React from 'react';
import axios from 'axios';
import PictoBar from './PictoBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {images :[]};

     onSearchSubmit = async (term) => {
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization:'Client-ID 574f91dd2b40665fa3dd896ea46a0279af28709c5ce19bff9c7b1115c3ad05b6'
            }
        })
        console.log(response);
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div>
                <PictoBar userSubmit={this.onSearchSubmit} />
                <ImageList foundImages={this.state.images} /> 
            </div>
            )
        }
}

export default App;