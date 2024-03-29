import React from 'react';

export default class MovieItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card">
                <img 
                    className="card-img-top card-img--height"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-text">Рейтинг: {item.vote_average}</div>
                </div>
            </div> 
        );
    }
}