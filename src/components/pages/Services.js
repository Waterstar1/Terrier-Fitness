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
                fillColor: "#000",
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }}
            onClick={() => {
                setSelectedPark(park);
            }}/>
            // <Marker
            //   key={park.properties.OBJECTID * 10}
            //   position={{
            //     lat: park.geometry.coordinates[0][0][1],
            //     lng: park.geometry.coordinates[0][0][0]
            //   }}
            //   onClick={() => {
            //     setSelectedPark(park);
            //   }}
            //   icon={{
            //     url: `/marker.png`,
            //     scaledSize: new window.google.maps.Size(123, 90)
            //   }}
            // />

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
