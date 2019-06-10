import React, {Component} from 'react';

class SearchField extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
            filter: '',
        };
    }

    handleOnChange = event => {

        this.setState({
            search: event.target.value
        });
    }

    handleMenuOnChange = event => {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return(
            <div className="search">
                <form>
                    Search for a GIF <br/>
                    <input type="text" name="search" onChange={this.handleOnChange}/>
                </form>

                <button onClick={() => this.props.updateSearch(this.state.search)}>
                    Search
                </button>

                <select>
                    <option value='small' onChange={this.handleMenuOnChange}> Small </option>
                    <option value='medium' onChange={this.handleMenuOnChange}> Medium </option>
                    <option value='large' onChange={this.handleMenuOnChange}> Large </option>
                </select>

                <button onClick={() => this.props.updateFilter(this.state.filter)}>
                    Apply Filter
                </button>
            </div>
        );
    }


};

export default SearchField;
