'use strict';

describe('Feature Test:', function(){
  var plane;

  it('correct plane number assigned', function(){
    plane = new Plane(4);
    expect(plane.plane_num).toEqual(4);
  });

});
