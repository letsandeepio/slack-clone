import React from 'react';
import './Chat.css';

import { useParams } from 'react-router-dom';

function Chat() {
  const { roomId } = useParams();

  return <div className="chat">You are in {roomId}</div>;
}

export default Chat;
