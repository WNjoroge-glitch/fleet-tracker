import React from 'react'

function LocationsInfo({info}) {
    return (
        <div className="location-info">
            <p>Vaccination_Center:{info.Vaccination_Center}</p>
            <p>Status:{info.status}</p>
            
        </div>
    )
}

export default LocationsInfo
