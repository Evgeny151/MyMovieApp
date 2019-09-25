import React from "react";
import Filters from "./Filters/Filters";
import MovieList from "./Movies/MovieList";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            filters: {
                sort_by: 'popularity.desc'
            }
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

    render() {
        const { filters } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-filters">
                        <div className="card">
                            <div className="card-body">
                                <h3>Фильтры:</h3>
                                <Filters filters={filters} onChangeFilters={this.onChangeFilters}/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <MovieList filters={filters} />
                    </div>
                </div>
            </div>
        );
    }
}

