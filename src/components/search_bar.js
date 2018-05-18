// import react and pull off component
import React, { Component } from 'react';

// define a new class called searchbar and give it access to all functionality that react.component has
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ''};
    }

    render() {
        return (
        <div>
            <input onChange={event => this.setState({ term: event.target.value })} />
        </div>
        );
    }
}

export default SearchBar;