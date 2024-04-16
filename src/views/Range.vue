<template>
    <div>
      <h1>Range</h1>
      <div id="map" style="height: 500px; width:500px;"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Add your Google Maps API key here
        googleMapsApiKey: 'AIzaSyAAwBPecFmf0co-0ua1pg2tA4wXMfIn3R4',
      }
    },
    methods: {
      initMap() {
        // Create a new map instance
        new google.maps.Map(document.getElementById('map'), {
          center: { lat: 32.709531, lng: -97.362856 }, 
          zoom: 15,
        });

        new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: { lat: 32.709531, lng: -97.362856 },
            radius: 80467, // 50 miles in meters
        });

        map.fitBounds(circle.getBounds());
      },
      
      loadGoogleMapsScript() {
        // Check if the Google Maps script is already loaded
        if (!window.google) {
          var script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&callback=initMap`;
          script.async = true;
          script.defer = true;
          // Attach your callback function to the `window` object
          window.initMap = this.initMap;
          document.head.appendChild(script);
        } else {
          // If already loaded, just initialize the map
          this.initMap();
        }
      }
    },
    mounted() {
      this.loadGoogleMapsScript();
    },
  }
  </script>
  
  <style lang="scss" scoped>
    .map {
        height: 500px; 
        width: 500px;
        justify-content: center;
    }
  </style>
  