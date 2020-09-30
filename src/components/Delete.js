import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.remove) {
            return null;
        } else {
            return (
                <div className={'removable'}>
                    {/* Movies List */}
                </div>
            );
        }
    }

}

Delete.propTypes = {
    remove:PropTypes.bool
};

Delete.defaultProps = {
    remove:false
};

export default Delete;