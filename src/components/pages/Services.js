import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  Polygon
} from "react-google-maps";
import * as parkData from "./data/parks.json";
import mapStyles from "./mapStyles";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  function coords(coordinates) {
    var border = []
      for (var element of coordinates) {
        border.push({lat: element[1], lng: element[0]});
      }
    return border;
  }

  function getColor(coordinate) {

    //GREEN - YELLOW - ORANGE - RED (in respective order)
    const colors = ['#158901', '#efe977', '#e27c4d', '#b2313c']

    //Comment this line of code out
    return colors[Math.floor(Math.random() * Math.floor(4))]

    //INSERT COLOR LOGIC HERE 

    // coordinate is the location of a park in the form {lat: xxx, lng: xxx}

  }

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 42.351134, lng: -71.1073625 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {parkData.features.map(park => (
          <Polygon
            path={coords(park.geometry.coordinates[0])}
            key={park.properties.OBJECTID}
            options={{
                fillColor: getColor(park.geometry.coordinates[0][0]),
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }}
            onClick={() => {
                setSelectedPark(park);
            }}/>
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{lat: selectedPark.geometry.coordinates[0][0][1], lng: selectedPark.geometry.coordinates[0][0][0]}}
        >
          <div>
            <h2>{selectedPark.properties.SITE_NAME}</h2>
            <h2>{'There are about '+ (Math.floor(Math.random() * (50 - 20) ) + 20) + ' people in this area'}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}


const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Services() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC1gXlilYT6zG937h44NvxdtP_ivFSKibY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
