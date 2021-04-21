import React ,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Locations from './Locations';
import LocationsInfo from './LocationsInfo';





function Map( {centerData,center,zoom,region} ) {
    const [info,setInfo] = useState(null)
    const markers = centerData.map(ev =>{
        return <Locations lat={ev.latitude} lng={ev.longitude}
        onClick={console.log("clicked")}/>

    })
    
    return (
        <div class="map">
            
            <GoogleMapReact
            bootstrapURLKeys={{
                key:'AIzaSyAC1pcgdCfEJs2Swb3TQnFWi28q5EpBJrI'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
                
            >
            {markers}
            

            </GoogleMapReact>
            {/* {info && <LocationsInfo info={info}/> } */}

            
        </div>
    )
}
Map.defaultProps ={
    center:{
        lat: -1.2864,
        lng:36.81722
    },
    zoom:10

}

export default Map
