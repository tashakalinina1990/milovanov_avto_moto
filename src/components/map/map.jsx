import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const settings = {
  center: {
    lat: 59.9681405,
    lng: 30.316492
  },
  zoom: 17
};

const Marker = () => <div className="map__marker"></div>;

const GoogleMap = ({
  additionalClass = ``
}) => {
  return (
    <div className={`map ${additionalClass}`}>
      <GoogleMapReact
        bootstrapURLKeys={{key: `AIzaSyDsStda2XNqdSd4s0XXhJr7O_MAqvwaOS4`}}
        defaultCenter={settings.center}
        defaultZoom={settings.zoom}
        options={{
          fullscreenControl: false,
          zoomControl: false
        }}
      >
        <Marker
          lat={settings.center.lat}
          lng={settings.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  additionalClass: PropTypes.string
};

export default GoogleMap;
