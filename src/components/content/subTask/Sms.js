import React, { useState, useRef, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { BiMicrophone } from "react-icons/bi";
import { MdInsertEmoticon, MdAttachFile, MdCameraAlt } from "react-icons/md";

const ChatComponent = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "How can we help you?",
      isSender: false,
    },
  ]);

  const chatContainerRef = useRef(null);

  const generateDummyResponse = (message) => {
    // Generate a dummy response based on the user's message
    // You can replace this with your own logic
    const dummyResponse = `Dummy response to: ${message}`;
    return dummyResponse;
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        isSender: true,
      };
      const dummyResponse = generateDummyResponse(inputText);
      const newDummyMessage = {
        id: messages.length + 2,
        text: dummyResponse,
        isSender: false,
      };
      setMessages([...messages, newMessage, newDummyMessage]);
      setInputText("");
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="md:container flex-col mx-6  shadow-lg rounded-lg md:w-4/5 mt-2 mb-4">
      {/* header */}
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2 header-chat">
        <div className="font-semibold text-2xl chat-title">Chat with Agent</div>
        <div className="h-12 w-12 p-2 bg-blue-500 rounded-full text-white font-semibold flex items-center justify-center">
          RB
        </div>
      </div>

      <div className="flex flex-row justify-between bg-white">
        <div className="w-full px-5 flex flex-col justify-between">
          <div
            className="flex flex-col mt-5"
            ref={chatContainerRef}
            style={{ maxHeight: "calc(80vh - 300px)", overflowY: "auto" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isSender ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`${message.isSender ? "mr-2" : "ml-2"} py-3 px-4 ${
                    message.isSender
                      ? "bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                      : "bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center  mt-8 my-6 ">
            <div className="relative w-full mr-2">
              <MdInsertEmoticon
                className="absolute top-3 left-2 text-gray-200"
                style={{ fontSize: "17px", fontWeight: "bold" }}
              />
              <input
                type="text"
                className="rounded-full pl-8 pr-16 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-600 text-white w-full "
                placeholder="Type a message..."
                id="typemsg"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <MdAttachFile className="absolute right-10 top-3 transform -rotate-45 text-gray-200 " />
              <MdCameraAlt className="absolute right-4 top-3 text-gray-200" />
            </div>
            <div className="space-x-2 flex">
              <div className="w-8 h-8 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
                <BiMicrophone />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-300 text-center items-center flex justify-center">
                <button
                  className="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white"
                  onClick={sendMessage}
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end message */}
        {/* ... */}
      </div>
    </div>
  );
};

export default ChatComponent;
