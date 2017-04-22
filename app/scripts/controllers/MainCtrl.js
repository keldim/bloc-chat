(function() {
     function MainCtrl(Room, Message) {
         this.rooms = Room.all;
         this.roomConnect = Room;
         this.messages = Message;
         this.selectRoom = function(roomId) {
            console.log('Selcted Room: '+roomId);
            console.log(this.rooms);
            //get the room messages
            // set this to a var main.messages.getByRoomId(main.active)
            this.currentRoomId = roomId;
            this.roomMessages = Message.getByRoomId(roomId);
             
           
             for (var i=0; i < this.rooms.length; i++) {
                console.log(this.rooms[i]);
                if(this.rooms[i].$id === roomId) { 
                    this.roomTitle = this.rooms[i].$value;
                }
             }
         }
         this.newMessage = Message.send;
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl',['Room', 'Message', MainCtrl] );
 })();