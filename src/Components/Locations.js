import React from 'react';
import img from '../icon/placeholder.png'


function Locations({ lat,lng,onClick}) {
    return (
        <div className="location">
            <img src={img} class="btn-location" alt="location-marker" onClick={console.log("clicked")}/>
            
        </div>
    )
}

export default Locations
