import React, { useContext, useState } from "react";
import { Typography, Row, Col } from "antd";
import { CardDataContext } from "../../../components/cardContext/CardContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSend, FiMic } from "react-icons/fi";

const Sms = () => {
  const cardData = useContext(CardDataContext);

  const [message, setMessage] = useState("");

  const handleSend = () => {
    // do something with the message
    console.log(message);
    // clear the input field
    setMessage("");
  };

  const messages = [
    {
      id: 1,
      text: "I am interested in learning more about your pricing and implementation process, as well as any ongoing support or maintenance services that you offer.",
      sender: "me",
      name: `${cardData.title}`,
      image: cardData.image,
    },
    {
      id: 2,
      text: "When can we schedule a meeting?",
      sender: "you",
      name: "Mathew",
      image: "https://via.placeholder.com/150",
    },
   
  ];

  return (
    <>
      <div className="date-wrap mb-16 relative mr-2 width-e5">
        <div className="absolute border-t-2 border-gray-400 top-10 left-6 width-thirty "></div>
        <div className="absolute border-b-2 border-gray-400 top-10 right-5 width-thirty "></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Typography>
            <Typography.Text type="secondary">April 7, 2023</Typography.Text>
          </Typography>
        </div>
      </div>

      <div className="h-full overflow-auto p-6   ">
        <div style={{ height: "220px", overflow: "auto" }}>
          <Row>
            {messages.map((message) => (
              <Col
                span={14}
                className="mb-8"
                offset={message.sender === "me" ? 0 : 6}
              >
                <div
                  className={`relative p-2 px-4 rounded-lg ${
                    message.sender === "me"
                      ? "bg-gray-200 text-gray-500"
                      : "bg-blue-300 text-gray-500"
                  }`}
                >
                  <div className="flex items-center">
                    <img
                      src={message.image}
                      alt={message.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <Typography.Text strong>{message.name}</Typography.Text>
                      <p className="message-text text-sm">4h ago</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-500 message-text">{message.text}</p>
                  </div>
                  <div className="dot-icon absolute top-2 right-2">
                    <BsThreeDotsVertical />
                  </div>
                </div>

                <div className="send-message-btn"></div>
              </Col>
            ))}
          </Row>

          {/* add send message button code here  */}

          </div>
      </div>
  

          <div className="send-msg-btn flex items-center px-5">
            <div className="relative send-msg-wrap">
              <input
                className="bg-gray-100 bg-lr-br  text-black w-full rounded-sm sms-input px-4 pl-8"
                placeholder="Type Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="absolute mic top-6 right-2  ml-4">
                <FiMic size={20} color="#484848" />
              </div>
            </div>
            <button onClick={handleSend} className="bg-blue-400 text-white sms-button px-4 bg-rl-br">
              Send Message
            </button>
          </div>
          </>
     
  );
};

export default Sms;
