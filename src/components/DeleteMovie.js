import MovieCard from './Movie/MovieCard';
import Delete from './Delete';
import React from 'react';

class DeleteMovie extends React.Component {

    constructor(props) {
        super(props);
        this.removeComponent = this.removeComponent.bind(this);
        this.state = {
            remove: false
        };
    }
    removeComponent() {
        this.setState({
            remove: true
        });
    }

    render() {
        return (
            <div>
                <Delete remove={this.state.remove}/><br/><br/>
                <button onClick={this.removeComponent}>remove component</button>
            </div>
        );
    }

}

DeleteMovie.propTypes = {
};

DeleteMovie.defaultProps = {
};

export default DeleteMovie;