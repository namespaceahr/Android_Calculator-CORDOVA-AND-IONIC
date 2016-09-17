angular.module('Calculator', ['ionic'])
.controller('PopupCtrl',function($scope,$ionicPopup, $timeout) {


 $scope.showPopup = function() {

   
   $timeout(function() {
      myPopup.close(); 
   }, 3000);
  };
   
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Calculator V1.0.0.2 (Developed By)',
       template: '<center><img src="img/namespaceahr.jpg"/></center> <br/> Ahmed Habibullah Rifat(namespace ahr) <br/><a href="https://www.namespaceahr.com">Namespace Ahr Site</a> '
     });
     alertPopup.then(function(res) {
       console.log('Thank you for Using Calculator');
     });
   };
});


