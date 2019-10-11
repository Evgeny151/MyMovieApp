import React from "react";
import Filters from "./Filters/Filters";
import MovieList from "./Movies/MovieList";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            filters: {
                sort_by: 'popularity.desc',
                year: 1900,
                genres: [
                    {
                        id: 28,
                        name: "Action"
                    }
                  ]
            },
            page: 1
        }
    }

    onChangeFilters = event => {
        const newFilters = {
            ...this.state.filters,
            [event.target.name]: event.target.value
        }

        this.setState({
            filters: newFilters
        })
    }

    onChangePage = page => {
        this.setState({
            page
        });
    }

    render() {
        const { filters, page } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="filters">
                        <h3>Фильтры:</h3>
                        <Filters
                            filters={filters} 
                            onChangeFilters={this.onChangeFilters}
                            onChangePage={this.onChangePage}
                            page={page}
                        />
                    </div>
                    <div className="col">
                        <MovieList 
                            filters={filters} 
                            page={page}
                            onChangePage={this.onChangePage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

