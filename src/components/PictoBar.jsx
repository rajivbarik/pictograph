import React from 'react';
import './PictoBar.css';

class PictoBar extends React.Component{
    state = {val: ''}

    onInputChange = (event) => {
        this.setState({val: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="flexContainer">
                    <label><h3>Picto Encode: </h3> </label>
                    <input className="inputStyle" 
                    type="text" 
                    value={this.state.val}
                    onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default PictoBar;
