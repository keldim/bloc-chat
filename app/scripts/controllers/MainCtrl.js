(function() {
     function MainCtrl(Room) {
         this.rooms = Room.all;
         this.roomConnect = Room;
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl',['Room', MainCtrl] );
 })();