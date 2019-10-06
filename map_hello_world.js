function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.647812, lng: -88.087128}, zoom: 3});
    }

    google.maps.event.addListenerOnce(map,'idle', function() {
        <script>
        console.log("bounds changed"); 
        </script>
 })

    
