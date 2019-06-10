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
            search: 'trending',
            filter: '',
        };
    }

    getGifs = () => {

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=6dULuhQPzri1hsmIPPmaIjSkieuL6EYK`)
        .then(res => {

            this.setState({
                gifs: res.data.data
            });
        })
        .catch(err => console.log(err));
    }

    componentDidMount = () => {this.getGifs()};


    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.search !== prevState.search)
            {this.getGifs()};
    }

    updateSearch = (newSearch) => {

        this.setState({
            search: newSearch,
        });
    }

    updateFilter = (newFilter) => {

        this.setState({
            filter: newFilter,
        });
    }

    display = () => {

        console.log('filter is ', this.state.filter);
    }

    render() {
        return (
            <div className="page">
                <header>
                    <h1> GIPHY </h1>
                </header>
                {this.display()}
                <SearchField updateFilter={this.updateFilter} updateSearch={this.updateSearch} />
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
