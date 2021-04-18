
import GoogleMapReact from 'google-map-react';

function Map( {center,zoom,region} ) {
    console.log(center,region)
    return (
        <div class="map">
            
            <GoogleMapReact
            bootstrapURLKeys={{
                key:'AIzaSyAC1pcgdCfEJs2Swb3TQnFWi28q5EpBJrI'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
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
