import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';
import { useMemo } from 'react';

// Function to calculate the most frequent location
const getMostFrequentLocation = (items) => {
  const locationCount = {};

  items.forEach(item => {
    const key = `${item.latitude},${item.longitude}`;
    if (locationCount[key]) {
      locationCount[key].count += 1;
    } else {
      locationCount[key] = { lat: item.latitude, lng: item.longitude, count: 1 };
    }
  });

  const mostFrequentLocation = Object.values(locationCount).reduce((prev, curr) =>
    prev.count > curr.count ? prev : curr
  );

  return [mostFrequentLocation.lat, mostFrequentLocation.lng];
};

function Map({ items }) {
  const center = useMemo(() => getMostFrequentLocation(items), [items]);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
