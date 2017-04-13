(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages")
    var messages = $firebaseArray(ref);
     

    return {
      getByRoomId: function (name) {
        // Filter the messages by their room ID.
          return ref.orderByChild("roomId").equalTo(name);
      }
      
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
