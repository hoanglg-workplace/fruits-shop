import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import map_marker from "../../assets/images/maps-and-flags.png";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const options = { closeBoxURL: "", enableEventPropagation: true };

const Map = () => {
  return (
    <section>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 10.787046139238425, lng: 106.69918630016495 }}
      >
        <Marker
          icon={{
            url: map_marker,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={{ lat: 10.787046139238425, lng: 106.69918630016495 }}
        >
          <InfoBox options={options}>
            <>
              <div className="bg-orange-600 text-white rounded-2xl mx-auto p-2 text-center">
                Company Name
              </div>
            </>
          </InfoBox>
        </Marker>
      </GoogleMap>
    </section>
  );
};

export default withScriptjs(withGoogleMap(Map));
