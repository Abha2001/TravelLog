import React,{useState} from 'react';
import moment from 'moment'

function DisplayForm({place}){
    console.log(place)
    return(
        <div className="display-form">
            <h3 className="title">
               {place.name}
            </h3>
            <img className="place-image" src={place.image}></img>
            <div>
                <small className="rating">Rating:{place.rating}</small>
                <img className="star" src="https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png"></img>
                <div className="details">
                    <h4>
                        Visited On: {moment(place.dateOfVisit).format("MMM Do YY")}
                    </h4>
                    <h5><small>Posted:</small>{moment(place.createdAt).fromNow()}</h5>
                    <h5><small>Edited:</small>{moment(place.updatedAt).fromNow()}</h5>
                </div>
            </div>
        </div>
    )
}

export default DisplayForm;