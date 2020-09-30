import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import Paginate from './Paginate';
import Search from './Search';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movies',
            movies: [],
            query: ''
        };
        this.onInput = this.onInput.bind(this);
    }

    onInput(query) {
        this.setState({
            query
        });
        
        this.searchMovie(query);
    }

    searchMovie() {
        const url = 'https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716';
    
        fetch (url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                }); 
            });
    }

    render() {
        const { movies, query } = this.state;
        const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());

        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
                    <Movies movies={movies.filter(isSearched(query))} />
                </div>
                <div className="mt-5">
                    <Movies />
                </div>
                <div className="paginate">
                    <Paginate />
                </div>
            </div>
        );
    }
}