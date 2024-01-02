import React, { useContext } from 'react'
import { FaVideo } from "react-icons/fa";
import { IoMdPersonAdd, IoIosMore } from "react-icons/io";
import { Messages } from './Messages';
import { Input } from './Input';
import { ChatContext } from '../context/ChatContext';

export const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <FaVideo />
          <IoMdPersonAdd />
          <IoIosMore />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
