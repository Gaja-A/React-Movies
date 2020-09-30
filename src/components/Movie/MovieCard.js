import React from 'react';
import PropTypes from 'prop-types';
import Likes from '../Likes';
// import DeleteMovie from '../DeleteMovie';

const MovieCard = (props) => (
    <div id={props.movie.id} className="movie-card">
        <div className="movie-card card">
            <div className="m-auto">
                <img className="card-img-top" src={props.movie.imageUrl} alt="" />
            </div>
            {/* <DeleteMovie /> */}
            <div className="card-body">
                <span className="card-title"><strong>{props.movie.title}</strong></span>
                <span></span>
                <span className="card-text"> - ({props.movie.year})</span>
                <h6 className="card-subtitle mb-2 mt-2 text-muted">{props.movie.category}</h6>
                <Likes />
            </div>
        </div>
    </div>
);


MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;