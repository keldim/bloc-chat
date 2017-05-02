(function() {
     function MainCtrl(Room, Message) {
         this.rooms = Room.all;
         this.roomConnect = Room;
         this.messages = Message;
         this.selectRoom = function(roomId) {
           
            //get the room messages
            // set this to a var main.messages.getByRoomId(main.active)
            this.currentRoomId = roomId;
            this.roomMessages = Message.getByRoomId(roomId);
             
             
                var height = $(window).height()-84;
                $('.messageArea').height(height);
                console.log(height);
             
             $(window).resize(function(){
            var height = $(window).height()-84;
            $('.messageArea').height(height);
            })


            
           
             for (var i=0; i < this.rooms.length; i++) {
                
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