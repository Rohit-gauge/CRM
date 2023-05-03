import React from "react";
import { Modal } from "antd";

const NoteModal = ({ visible, onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      closable={false}
      maskClosable={true}
      className="rounded-sm my-custom-modal-class"
    >
      {/* Add your modal content here */}
      <div className="note-moadal-wrap rounded-sm">
        <div className="header flex  justify-center items-center text-center bg-gray-200 rounded-sm">
          <h2 className="p-6">Notes</h2>
        </div>

        <div className="w-full  p-9 rounded-lg">
          <textarea
            className="w-full h-32 px-3 py-2 text-gray-700  text-area rounded-lg focus:outline-none focus:shadow-outline resize-none"
            placeholder="Type your note here"
          ></textarea>
        </div>

        <div className="notes-btn-wrap flex pb-10 mt-4 mx-9 ">
          <button
            onClick={handleCancel}
            className="cancel w-1/2 text-blue-400  text-center cursor-pointer py-3 px-4 mr-2 rounded-sm font-semibold"
          >
            Cancel
          </button>
          <button className="cancel w-1/2 bg-blue-400 text-white text-center cursor-pointer py-3 px-4 ml-2 mr-3 rounded-sm font-semibold">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
