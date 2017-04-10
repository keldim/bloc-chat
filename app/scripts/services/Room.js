(function() {
  function Room($firebaseArray, $uibModal) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var createnewroom = function (value) {
        rooms.$add(value);
    };
    
    var openmodal = function () {
      var modalInstance = $uibModal.open({
          templateUrl: '/templates/newroom.html',
          controller: function ($scope) {
              console.log("loaded");
              $scope.createRoom = createnewroom;
              $scope.dismissRoom = function () {
                    modalInstance.dismiss();
              };  
          }
      })   
    };
   
    return {
        all: rooms,
        openmodal: openmodal,
        createnewroom: createnewroom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();