
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const InteractiveMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Birdhouse Coordinates: 33.5303, -84.7554
    const position: [number, number] = [33.5303, -84.7554];
    
    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: false,
    });

    // Add Zoom Control to the right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Warm, muted tile style using Stadia or OSM
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(map);

    // Custom Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="
          background-color: #B8704A; 
          width: 24px; 
          height: 24px; 
          border-radius: 50%; 
          border: 4px solid #F5F0E8;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        "></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    L.marker(position, { icon: customIcon })
      .addTo(map)
      .bindPopup('<div style="font-family: serif; font-weight: bold; padding: 5px;">Birdhouse Coffee Room</div>')
      .openPopup();

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-full min-h-[500px] z-0" 
      style={{ background: '#EDE6D8' }}
    />
  );
};

export default InteractiveMap;
