import { MapPin, ExternalLink, Navigation } from "lucide-react";

const MapSection = () => {
  // Google Maps embed for One Love Academy - No. 15 Alhaji Ibrahim R. Crescent, Igumah by Miyar Hotel, Mowe, Ogun state
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912181451!2d3.372061315744695!3d6.552186395323028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sNo.%2015%20Alhaji%20Ibrahim%20R.%20Crescent%2C%20Igumah%20by%20Miyar%20Hotel%2C%20Mowe%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus";

  // Direct Google Maps link for opening in new tab
  const googleMapsLink =
    "https://www.google.com/maps/search/No.+15+Alhaji+Ibrahim+R.+Crescent,+Igumah+by+Miyar+Hotel,+Mowe,+Ogun+state,+Nigeria";

  // Directions link
  const directionsLink =
    "https://www.google.com/maps/dir//No.+15+Alhaji+Ibrahim+R.+Crescent,+Igumah+by+Miyar+Hotel,+Mowe,+Ogun+state,+Nigeria";

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      <div className="p-6 bg-gradient-accent">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-full">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg text-white">Find Us</h3>
              <p className="text-sm text-white/90">One Love Academy Location</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              title="View on Google Maps"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              title="Get Directions"
            >
              <Navigation className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-48 sm:h-56 md:h-64 lg:h-72">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="One Love Academy Location - No. 15 Alhaji Ibrahim R. Crescent, Igumah by Miyar Hotel, Mowe, Ogun state"
            className="w-full h-full rounded-b-2xl"
          ></iframe>
        </div>
      </div>

      <div className="p-4 bg-muted">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-foreground">📍 No. 15 Alhaji Ibrahim R. Crescent</p>
          <p className="text-xs text-muted-foreground">
            Igumah by Miyar Hotel, Mowe, Ogun State, Nigeria
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              <span>View on Maps</span>
            </a>
            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
            >
              <Navigation className="h-3 w-3" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
