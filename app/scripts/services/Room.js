(function() {
  function Room($firebaseArray, $uibModal) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    
    var openmodal = function () {
      var modalInstance = $uibModal.open({
          templateUrl: '/templates/newroom.html',
          controller: function ($scope) {
              console.log("loaded");
              $scope.createRoom = function (value) {
                    rooms.$add(value);
                    modalInstance.dismiss();
              };
              $scope.dismissRoom = function () {
                    modalInstance.dismiss();
              };  
          }
      })   
    };
   
    return {
        all: rooms,
        openmodal: openmodal
        
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();