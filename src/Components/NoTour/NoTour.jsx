import React from 'react';
import PropTypes from 'prop-types';

NoTour.propTypes = {
    handleRefresh : PropTypes.func
};

NoTour.defaultProps = {
    handleRefresh : null
}

function NoTour(props) {
    const {handleRefresh} = props;
    return (
        <div className="row">
            <div className="col-12 mb-5">
                <h4 className="text-center">No Tours Left</h4>
                <div className="underline" />
            </div>
            <div className="col-12 text-center">
                <button className="btn btn-outline-info" onClick={handleRefresh}>Refresh</button>
            </div>
        </div>
    );
}

export default NoTour;