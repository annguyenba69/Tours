import React from 'react';
import PropTypes from 'prop-types';

Loading.propTypes = {

};

function Loading(props) {
    return (
        <div className="row">
            <div className="col-12 mb-5">
                <h4 className="text-center">Loading</h4>
                <div className="underline" />
            </div>
        </div>
    );
}

export default Loading;