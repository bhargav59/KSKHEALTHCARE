import React from 'react';

// Centralized Google Maps embed for KSK Healthcare Doddanekundi
const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.830!2d77.7471!3d12.9700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110f3c2e4f0d%3A0xd6f02a0b0c1d2e3f!2sKSK%20Healthcare%2C%206B%2C%20Kote%20NCMR%20Building%2C%20Karthik%20Nagar%20Service%20Rd%2C%20Outer%20Ring%20Rd%2C%20Doddanekundi%2C%20Bengaluru%2C%20Karnataka%20560037%2C%20India!5e0!3m2!1sen!2sin!4v1696234567890!5m2!1sen!2sin";

export default function MapEmbed({
    title = 'KSK Healthcare - Doddanekundi, Bengaluru',
    className = 'rounded-xl',
}) {
    return (
        <div className={`w-full h-full ${className}`}>
            <iframe
                src={MAP_EMBED_SRC}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
                className="w-full h-full border-0"
            />
        </div>
    );
}
