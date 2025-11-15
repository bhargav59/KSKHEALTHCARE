import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import kskMapImg from '../assets/ksk-map.jpg';

const SimpleMapRedirect = ({
  title = 'KSK Healthcare - Doddanekundi, Bengaluru',
  className = 'rounded-xl',
  height = 400
}) => {
  const googleMapsUrl = 'https://www.google.com/maps/place/KSK+Healthcare/@12.972951,77.6958548,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11c7c2a378d9:0x6a5459642686d03f!8m2!3d12.9729458!4d77.6984297!16s%2Fg%2F11w3n388q6?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D';
  const address = 'KSK Healthcare, Doddanekundi, Bengaluru';

  return (
    <div className={`relative w-full ${className} overflow-hidden border border-gray-200`} style={{ height: `${height}px` }}>
      {/* Clickable map area that redirects to Google Maps */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative group overflow-hidden"
        title="Click to open location in Google Maps"
      >
        {/* Map image background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${kskMapImg})`,
            height: '100%',
            width: '100%',
          }}
        >
          {/* Dark overlay that subtly changes on hover */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-300"></div>
        </div>
      </a>
    </div>
  );
};

export default SimpleMapRedirect;