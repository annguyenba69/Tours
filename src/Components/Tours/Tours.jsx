import React from 'react';
import PropTypes from 'prop-types';
import TourItem from '../TourItem/TourItem';

Tours.propTypes = {
    listTours: PropTypes.array,
    handleDeleteItem : PropTypes.func,
};

Tours.defaultProps = {
    listTours: [],
    handleDeleteItem : null,
}

function Tours(props) {
    const{listTours, handleDeleteItem} = props;
    return (
        <div className="row">
            <div className="col-12 mb-5">
                <h4 className="text-center">Our Tours</h4>
                <div className="underline" />
            </div>
            {listTours.map((value, key) => (
                <TourItem key={key} id={value.id} name={value.name} info={value.info} image={value.image} price={value.price} handleDeleteItem={handleDeleteItem}></TourItem>
            ))}
        </div>

    );
}

export default Tours;