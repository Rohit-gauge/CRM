import React, { useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
// import VerificationModal from "../ModalsAction/VerificationModal";

const CloseTicket = ({ visible, onCancel }) => {








  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        closable={true}
        maskClosable={true}
        closeIcon={<CloseOutlined onClick={handleCancel} />}
        className="rounded-sm  "
        width={410}

      >
        {/* Add your modal content here */}
        <div className="note-moadal-wrap rounded-sm">
          <div className="header flex justify-center items-center text-center bg-gray-200 rounded-sm">
            <h2 className="p-6"> CLose Ticket</h2>
          </div>

          <div className="task-name pt-3 px-6">
            <h2 className="font-semibold py-2 relative w-fit">
              How did it occur ?
              <span className="text-red-500 absolute top-2">*</span>
            </h2>
            <textarea
              className="w-full h-12 border border-gray-400  text-gray-700   rounded-lg focus:outline-none focus:shadow-outline resize-none"
              
            ></textarea>

          </div>

          <div className="task-name pt-3 px-6">
            <h2 className="font-semibold py-2 relative w-fit">
              How did you solve it ?
              <span className="text-red-500 absolute top-2">*</span>
            </h2>
            <textarea
              className="w-full h-12 border border-gray-400   text-gray-700   rounded-lg focus:outline-none focus:shadow-outline resize-none"
             
            ></textarea>

          </div>

          <div className="create-lead-btn flex m-auto w-fit p-4 ">
            <button   className="w-full text-white bg-blue-400 text-center cursor-pointer py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300">
            Close Ticket
            </button>
          </div>



        </div>



      </Modal>


      {/* <VerificationModal
        visible={isVerificationModalVisible}
        onCancel={handleVerifyModalCancel}
      /> */}

    </>
  );
};

export default CloseTicket;
