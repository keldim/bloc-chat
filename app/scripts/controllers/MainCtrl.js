(function() {
     function MainCtrl(Room, Message) {
         this.rooms = Room.all;
         this.roomConnect = Room;
         this.messages = Message;
         this.active = null;
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl',['Room', 'Message', MainCtrl] );
 })();