'use strict';

describe('cw module', function() {

  beforeEach(module('cw'));

  describe('hello controller', function(){

    it('should ....', inject(function($controller) {
      //spec body1
      var helloController = $controller('HelloConroller');
      expect(helloController).toBeDefined();
    }));

  });
});
