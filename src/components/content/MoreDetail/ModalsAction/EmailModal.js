import React from "react";
import { Modal } from "antd";
import { MdOutlineTextFormat } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

const EmailModal = ({ visible, onCancel }) => {
  
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={true}
      maskClosable={true}
      className="rounded-sm my-custom-email-class"
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap rounded-sm">
        <div className="header flex  items-start text-start bg-email rounded-sm">
          <h2 className="p-6 px-4 text-start text-white font-semibold">
            Email
          </h2>
        </div>

        <div className="w-full  p-4 rounded-lg">
          <input
            type="text"
            className="border-b w-full py-2 border-gray-300"
            placeholder="Subject"
          />
        </div>

        <div className="w-full  p-4 rounded-lg">
          <textarea
            className="w-full h-56  text-gray-700   rounded-lg focus:outline-none focus:shadow-outline resize-none"
            placeholder="Body Text"
          ></textarea>
        </div>

        <div className="send-email p-4 flex">
          <div className="cancel w-1/2 bg-blue-400 text-white text-center cursor-pointer py-3 px-4 ml-2 rounded-sm font-semibold">
            Send
          </div>
          <div className="cancel w-1/2 flex space-x-5 attachments cursor-pointer  justify-start items-center ml-6 ">
            <MdOutlineTextFormat size={29}/>
            <IoIosAttach size={23} />
            <BsFillEmojiSmileFill size={23} />
            <GrGallery size={23} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmailModal;
