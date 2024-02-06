require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {

  var scene = new WebScene({
    portalItem: {
      id: "fbbbaa2fbfda41b8b3f96427c3ac5c79"
    }
  });

  var camera = new Camera({
    position: [-71.06613, 42.35511, 2500], // Elevation in meters
    tilt: 0,
    heading: 0
  });

  var camera2 = new Camera({
    position: {
      x: -71.09893,
      y: 42.33807,
      z: 500
    },
    tilt: 0,
    heading: 0
  });

  var camera3 = new Camera({
    position: {
      x: -70.974581,
      y: 42.340931,
      z: 7000
    },
    tilt: 30, // Tilted downwards for a good view of downtown
    heading: 270 // Facing west towards downtown Boston
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    viewingMode: "global",
    camera: camera,
    environment: {
      lighting: {
        date: new Date(),
        directShadowsEnabled: true,
        cameraTrackingEnabled: false
      }
    }
  });

  var homeBtn = new Home({
    view: view
  });

  view.ui.add(homeBtn, "top-left");

  // Wait for the DOM to fully load
  document.addEventListener('DOMContentLoaded', function() {
    var bc = document.getElementById('bc'); // Button for Boston Commons view
    var gm = document.getElementById('gm'); // Button for Gardner Museum view
    var seaview = document.getElementById('seaview'); // Button for Boston Harbour view

    if(bc && gm && seaview) {
      bc.addEventListener('click', function() {
        view.goTo(camera);
      });

      gm.addEventListener('click', function() {
        view.goTo(camera2);
      });

      seaview.addEventListener('click', function() {
        view.goTo(camera3);
      });
    } else {
      console.error("One or more buttons are not found in the HTML document.");
    }
  });
});
