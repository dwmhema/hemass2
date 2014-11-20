
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();

    // Send A Message To The Server
    $('#but').on('click', function(){
      var text = $('#text1').val();
      var name =$('#username').val();
      var location =$('#location').val();
      socket.emit('message', text);
      socket.emit('message', name);
      socket.emit('message', location);
        $('#text1').val(' ');
        $('#username').val(' ');
        $('#location').val(' ');
    });

    // Recieve Update Event From The Server
    socket.on('update', function(text,location, name){
    
      $('.messages').append(text, location, name).append('<hr>');

     
    });

});
