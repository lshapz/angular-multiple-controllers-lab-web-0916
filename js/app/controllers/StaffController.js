function StaffController() {

  this.name = "name";
  this.phone = "212-555-1234"
  this.email = 'bob@microsoft.com';

  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}



angular
  .module('app')
  .controller('StaffController', StaffController);
