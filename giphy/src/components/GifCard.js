import React, {Component} from 'react';

export default class GifCard extends Component {

    render() {
        return (
            <img src={this.props.gif} alt={this.props.alt}/>
        );
    }
}
