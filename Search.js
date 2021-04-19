import React from 'react';

/**
 *  The search class is responsible for creating a search bar for the user to insert the id or nickname.
 */
class Search extends React.Component {
    render() {
        return (
            <div>
                <p>Search: {this.props.query}</p>
                <input
                    type='text'
                    placeholder='search'
                    value={this.props.query}
                    onChange={this.props.handleSearch}
                />
            </div>
        )
    }
}
export default Search;