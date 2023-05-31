import React, { useEffect, useState } from "react";
import { getMessages } from "../assets/api/messages";
import Header from "./Inner Components/Header";
import Message from "./Inner Components/Message";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((data) => setMessages(data.reverse()));
  }, []);

  return (
    <div id="messages">
      <Header label="Message" count={messages.length} />

      <div className="messages">
        {messages.map((message) => {
          return (
            <Message
              _id={message._id}
              name={message.name}
              email={message.email}
              phone={message.phone}
              date={message.date}
              message={message.message}
              whatToDelete={"message"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
