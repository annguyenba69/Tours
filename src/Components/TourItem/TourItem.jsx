import React, { useState } from 'react';
import PropTypes from 'prop-types';

TourItem.propTypes = {

};

function TourItem(props) {
    const { key, id, name, info, image, price, handleDeleteItem } = props;
    const [readMore, setReadMore] = useState(false);
    function handleReadMore(){
        setReadMore(!readMore);
    }
    return (
        <div className="col-12">
            <div className="tour-item mb-5">
                <div className="tour-item-image">
                    <img className="" src={image} alt="" />
                </div>
                <div className="tour-item-detail">
                    <div className="tour-item-title d-flex justify-content-between">
                        <p className="title">{name}</p>
                        <p className="price">${price}</p>
                    </div>
                    <div className="tour-item-des">
                        <p>{readMore ? info : info.substring(0,200)}
                            <span><button className="button-read-more" onClick={handleReadMore}>{readMore ? "Show Less" : "Read More"}</button></span>
                        </p>
                    </div>
                    <div className="tour-item-delete text-center">
                        <button className="btn btn-outline-danger" onClick={() => handleDeleteItem(id)}>Not Interested</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourItem;