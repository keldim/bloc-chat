(function() {
  function Room($firebaseArray, $uibModal) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var createnewroom = function () {
        rooms.$add(typedvalue);
    };
    var openmodal = function () {
      $uibModal.open({
          templateUrl: '/templates/newroom.html',
          controller: function () {
              console.log("loaded");
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