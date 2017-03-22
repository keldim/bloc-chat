(function() {
     function MainCtrl(Room) {
         this.rooms = Room;
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl',['Room', MainCtrl] );
 })();