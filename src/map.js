function Map() {

  this.googleMap  = null;
  this.streetView = null;
  this.zoom   = 4;
  this.center = {
    lat: 41.107267,
    lng: 29.032362
    
  }
  this.initMap = function(){

    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom      : this.zoom,
      center    : this.center,
    });

    this.streetView = this.googleMap.getStreetView();
    this.streetView.setOptions({
      fullscreenControl: false,
      linksControl: false,
    });

  }

}

Map.prototype.setZoom = function(value){
  this.zoom = value;
  this.googleMap.setZoom(value);
}

Map.prototype.setMapType = function(type){
  this.googleMap.setMapTypeId(type);
}

Map.prototype.setCenter = function(key,value){
  this.center[key] = value;
  this.googleMap.setCenter(this.center);
}

Map.prototype.setControl = function(key,value){
  var object = {};object[key] = value;
  this.googleMap.setOptions(object);
}

Map.prototype.setControlPosition = function(key,value){
  var object = {};object[key]={position:value};
  this.googleMap.setOptions(object);
}

Map.prototype.setSvControl = function(key,value){
  var object = {};object[key] = value;
  this.streetView.setOptions(object);
  if(key == "addressControl")
    this.streetView.setOptions({enableCloseButton:value});
}

Map.prototype.setSvControlPosition = function(key,value){
  var object = {};object[key]={position:value};
  this.streetView.setOptions(object);
}
