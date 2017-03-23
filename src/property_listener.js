var map = new Map();
console.log(Offline.state);
window.wallpaperPropertyListener = {
  applyUserProperties: function(properties){

    if(properties.mapZoom){
      map.setZoom(properties.mapZoom.value);
    }

    if(properties.mapType){
      map.setMapType(properties.mapType.value);
    }

    if(properties.latitude){
      map.setCenter("lat",properties.latitude.value);
    }
    else if(properties.longitude){
      map.setCenter("lng",properties.longitude.value);
    }

    if(properties.zoomControl){
      map.setControl("zoomControl",properties.zoomControl.value);
    }

    if(properties.mapTypeControl){
      map.setControl("mapTypeControl",properties.mapTypeControl.value);
    }

    if(properties.streetViewControl){
      map.setControl("streetViewControl",properties.streetViewControl.value);
    }

    if(properties.zoomControlPos){
      map.setControlPosition("zoomControlOptions",properties.zoomControlPos.value);
    }

    if(properties.mapTypeControlPos){
      map.setControlPosition("mapTypeControlOptions",properties.mapTypeControlPos.value);
    }

    if(properties.streetViewControlPos){
      map.setControlPosition("streetViewControlOptions",properties.streetViewControlPos.value);
    }

    if(properties.svZoomControl){
      map.setSvControl("zoomControl",properties.svZoomControl.value);
    }

    if(properties.compassControl){
      map.setSvControl("panControl",properties.compassControl.value);
    }

    if(properties.addressControl){
      map.setSvControl("addressControl",properties.addressControl.value);
    }

    if(properties.panControlPos){
      map.setSvControlPosition("panControlOptions",properties.panControlPos.value);
    }

    if(properties.svZoomControlPos){
      map.setSvControlPosition("zoomControlOptions",properties.svZoomControlPos.value);
    }

    if(properties.addressControlPos){
      map.setSvControlPosition("addressControlOptions",properties.addressControlPos.value);
    }

  }
};
