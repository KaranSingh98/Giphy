import React, {Component} from 'react';

class SearchField extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

    handleOnChange = event => {

        this.setState({
            search: event.target.value
        });
    }

    render() {
        return(
            <div className="search">
                <form>
                    Search for a GIF <br/>
                    <input type="text" name="search" onChange={this.handleOnChange}/>
                </form>
                <button onClick={() => this.props.updateSearch(this.state.search)}> Search </button>
            </div>
        );
    }


};

export default SearchField;
