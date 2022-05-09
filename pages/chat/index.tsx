import { NextPage } from 'next';
import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { io } from "socket.io-client";
import { useTypedSelector } from '../../hooks/useTypedSelector';
const ENDPOINT = "http://localhost:5000/";

const Chat: NextPage = () => {
  const socket = io(ENDPOINT);

  const { currentUser } = useTypedSelector(state => state.auth);

  useEffect(() => {
    console.log("work")
    socket.on("newChat", data => {
      console.log("newChat", data)
    });

    return () => {
      socket.on("disconnect", () => {
        console.log("disconnect")
      })
    }
  }, []);

  const onSend = () => {
    socket.emit("chat",
      {
        messages: {
          message: "test",
          sender: currentUser._id,
          recipient: "6278b1004bb55e7d6124a87e",
          sendDate: "11111"
        },
        sender: "currentUser._id",
        recipient: "6278b1004bb55e7d6124a87e"
      }
    )
  }

  return (
    <MainLayout>
      <div className="main">
        <div className="container clearfix">
          <div className="people-list" id="people-list">
            <div className="search">
              <input type="text" placeholder="search" />
              <i className="fa fa-search"></i>
            </div>
            <ul className="list">
              <li className="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                <div className="about">
                  <div className="name">Vincent Porter</div>
                  <div className="status">
                    <i className="fa fa-circle online"></i> online
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="chat">
            <div className="chat-header clearfix">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

              <div className="chat-about">
                <div className="chat-with">Chat with Vincent Porter</div>
                <div className="chat-num-messages">already 1 902 messages</div>
              </div>
              <i className="fa fa-star"></i>
            </div>

            <div className="chat-history">
              <ul>
                <li className="clearfix">
                  <div className="message-data align-right">
                    <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                    <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                  </div>
                  <div className="message other-message float-right">
                    Hi Vincent, how are you? How is the project coming along?
                  </div>
                </li>

                <li>
                  <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">10:12 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Are we meeting today? Project has been already finished and I have results to show you.
                  </div>
                </li>
              </ul>

            </div>
            <div className="chat-message clearfix">
              <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows={3}></textarea>
              <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
              <i className="fa fa-file-image-o"></i>
              <button onClick={onSend}>Send</button>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chat;