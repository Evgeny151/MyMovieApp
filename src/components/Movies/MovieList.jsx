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

    getMovies = (filters, page) => {
        const { sort_by, year } = filters;
        const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${year}`;

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

    componentDidMount() {
        this.getMovies(this.props.filters, this.props.page);
    }

    componentDidUpdate(prevProps) {
        if (this.props.filters.sort_by !== prevProps.filters.sort_by || this.props.filters.year !== prevProps.filters.year) {
            this.getMovies(this.props.filters, 1);
            this.props.onChangePage(1);
        }

        if (this.props.page !== prevProps.page) {
            this.getMovies(this.props.filters, this.props.page);
        }
    }

    render() {
        console.log(this.state.movies);

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