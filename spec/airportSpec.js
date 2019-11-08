'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var new_planes;
  var new_plane;

  beforeEach(function(){
    plane = new Plane(1);
    airport = new Airport();
  });

  it('plane can land at airport', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it('correct plane takes off', function(){
    new_planes = []
    for (var i = 0; i < 3; i++) {
      new_plane = new Plane(i);
      new_planes.push(new_plane)
      airport.land(new_plane)
    };
    airport.take_off(new_plane[2]);
    expect(airport.planes).not.toContain(new_plane[2]);
  });

  it('does not let plane land if airport full', function(){
    for (var i = 0; i < 10; i++) {
      new_plane = new Plane(i);
      airport.land(new_plane)
    };
    airport.land(new Plane(9));
    expect(airport.planes.pop()).toEqual(new_plane)
  });
});
