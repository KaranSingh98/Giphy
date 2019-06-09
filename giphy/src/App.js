import React, {Component} from 'react';
import "./App.css";
import axios from 'axios';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            gifs: [],
            search: 'trending'
        };
    }

    componentDidMount = () => {

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=6dULuhQPzri1hsmIPPmaIjSkieuL6EYK`)
        .then(res => {

            this.setState({
                gifs: res.data.data
            });
        })
        .catch(err => console.log(err));
    }

    updateSearch = (newSearch) => {

        this.setState({
            search: newSearch,
        });

        console.log('search in app is', this.state.search)
    }

    render() {
        return (
            <div>
                <header>
                    <h1> GIPHY </h1>
                </header>
                <SearchField updateSearch={this.updateSearch} />
                <h1> </h1>
                {this.state.gifs.map(gif =>
                    <div className="gifs" key={gif.id}>
                        <GifCard gif={gif.images.original.url} alt={gif.title}/>
                    </div>
                )}
            </div>
        );
    }
};

export default App;
