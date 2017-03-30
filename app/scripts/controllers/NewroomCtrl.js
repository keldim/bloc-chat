(function() {
     function NewroomCtrl(Room) {
         this.newroom = Room.createnewroom;
     }
 
     angular
         .module('blocChat')
         .controller('NewroomCtrl',['Room', NewroomCtrl] );
 })();