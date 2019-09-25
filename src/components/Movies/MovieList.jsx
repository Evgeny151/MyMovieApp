import React from 'react';
import MovieItem from "./MovieItem";
import{ API_URL, API_KEY_3 } from "../../api/api";

export default class MovieList extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        const { filters: {sort_by} } = this.props;
        const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU$sort_by=${sort_by}`;

        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results
                });
            });
    }

    componentWillReceiveProps(nextProps){
        console.log('props', this.props, 'nextProps', nextProps)

        const { filters: {sort_by} } = nextProps;
        const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU$sort_by=${sort_by}`;

        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results
                });
            });
    }

    render() {
        const { movies } = this.state;

        return (
            <div className="list">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="card-item mb">
                            <MovieItem item={movie} />
                        </div>
                    );
                })}
            </div>
        );
    }
}