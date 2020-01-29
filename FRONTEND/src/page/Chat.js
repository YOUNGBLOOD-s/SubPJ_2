import React from 'react';
import socketio from 'socket.io-client';

const socket = socketio.connect('http://52.78.218.79:8081');

const Chat = () => {
  socket.emit('add user', 'choiys');
  socket.on('new message', msg => {
    console.log(msg);
  });
  return <div></div>;
};

export default Chat;
