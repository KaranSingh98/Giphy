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

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=6dULuhQPzri1hsmIPPmaIjSkieuL6EYK`,
        {headers: {'content-type': 'text/html'}})
        .then(res => {

            this.setState({
                gifs: res.data.data
            });
            console.log('gifs is ', this.state.gifs);
        })
        .catch(err => console.log(err));
    }

    updateSearch = (newSearch) => {

        this.setState({
            search: newSearch
        });
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
                        <GifCard gif={gif.images.url} alt={gif.title}/>
                    </div>
                )}
            </div>
        );
    }
};

export default App;
