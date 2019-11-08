'use strict';

function Airport() {
  this.planes = [];
  this.CAPACITY = 10;
};

Airport.prototype.land = function(plane) {
  if (this.isAirportFull()) {
    return 'airport full'
  } else {
    this.planes.push(plane)
  };

};

Airport.prototype.isAirportFull = function() {
  return this.planes.length === this.CAPACITY
};

Airport.prototype.take_off = function(plane) {
  for( var i = 0; i < this.planes.length; i++){
    if ( this.planes[i] == plane) {
      this.planes.splice(i, 1);
    };
  };
};
