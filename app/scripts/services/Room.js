(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();