(function() {
  function Room($firebaseArray, $document) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var createnewroom = function () {
        var typedvalue = $document.getElementById('addvalue').value;
        rooms.$add({ (rooms.length + 1) : typedvalue })
    };
    var openmodal = function () {
      $uibModal.open({template: newroom.html, controller: NewroomCtrl.js})   
    };
    var typedvalue = $document.getElementById('addvalue').value;
      
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$document', Room]);
})();