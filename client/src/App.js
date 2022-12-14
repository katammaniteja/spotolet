import React from "react";
import Map, { Marker } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";

const App = () => {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 8,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibWFuaXRlamEyNDAxIiwiYSI6ImNsYm5seHpyNTBzcWczb3IwemN3YjV1ZDMifQ.ezDrUg-XzRddSk8P3MR0Kg"
    >
      <Marker longitude={-100} latitude={40} anchor="bottom">
        {/* <RoomIcon /> */}
        <h1>Im here</h1>
      </Marker>
    </Map>
  );
};

export default App;
