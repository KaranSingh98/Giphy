import React, {Component} from 'react';

export default class GifCard extends Component {

    render() {
        return (
            <img width="50%" src={this.props.gif} alt={this.props.alt}/>
        );
    }
}
