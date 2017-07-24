'use strict';

angular
  .module('cw', [])
  .controller('HelloController', helloController);

HelloController.$inject = [];

function helloController() {
  var vm = this;
  vm.title = 'hello1';
}
