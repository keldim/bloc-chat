(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages")
    //var messages = $firebaseArray(ref);
     

    return {
      getByRoomId: function (name) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(name));
      },
        send: function(newMessage, identity) {
        // Send method logic
            console.log("working!");
         $firebaseArray(ref).$add({content: newMessage, roomId: identity, username: $cookies.get('blocChatCurrentUser')});
            $('input:text').val('');
      }
        }
      
    };
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
