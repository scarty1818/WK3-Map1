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
    position: [-71.06613, 42.35511, 2500], // elevation in meters
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
    tilt: 30, // Tilted downwards
    heading: 270 // Heading west
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
    },
  });

  var homeBtn = new Home({
    view: view,
    viewpoint: {
      camera: camera // setting home button to use the initial camera
    }
  });

  view.ui.add(homeBtn, "top-left");
  
  var bc = document.getElementById('bc');
  var gm = document.getElementById('gm');
  var seaview = document.getElementById('seaview');

  [bc, gm, seaview].forEach(function(button) {
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });
  
  gm.addEventListener('click', function() {
    view.goTo({ target: camera2 });
  });
  
  bc.addEventListener('click', function() {
    view.goTo({ target: camera });
  });

  seaview.addEventListener('click', function() {
    view.goTo({ target: camera3 });
  });

});



