function ContactController($scope) {

  this.name = "your name";
  this.phone = "212-555-1234"
  this.email = 'bill@microsoft.com';

  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);