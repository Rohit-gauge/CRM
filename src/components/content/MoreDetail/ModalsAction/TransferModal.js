import React, { useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import VerificationModal from "../ModalsAction/VerificationModal";

const TransferModal = ({ visible, onCancel }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [idErrorMessage, setIdErrorMessage] = useState('');
  const [keyErrorMessage, setKeyErrorMessage] = useState('');
  const [isVerificationModalVisible, setIsVerificationModalVisible] =
    useState(false);

  const showVerifyModal = () => {
    setIsVerificationModalVisible(true);
  };

  const handleVerifyModalCancel = () => {
    setIsVerificationModalVisible(false);
  };

  function handleEmployeeIdChange(event) {
    setEmployeeId(event.target.value);
    setIsButtonDisabled(event.target.value === '' || secretKey === '');
    setIdErrorMessage('');
  }

  function handleSecretKeyChange(event) {
    setSecretKey(event.target.value);
    setIsButtonDisabled(employeeId === '' || event.target.value === '');
    setKeyErrorMessage('');
  }

  function handleSaveClick() {
    let idError = '';
    let keyError = '';

    if (employeeId === '') {
      idError = 'Employee ID is required.';
    }

    if (secretKey === '') {
      keyError = 'Secret Key is required.';
    }

    const isValid = checkCredentials(employeeId, secretKey, idError, keyError);

    if (isValid) {
      setIsVerificationModalVisible(true);
      onCancel(); // close the TransferModal
    }
  }


  function checkCredentials(id, key, idError, keyError) {
    const dummyEmployeeId = 'dummy_id';
    const dummySecretKey = 'dummy_key';

    if (id !== dummyEmployeeId) {
      idError = 'Incorrect Employee ID.';
    }

    if (key !== dummySecretKey) {
      keyError = 'Incorrect Secret Key.';
    }

    setIdErrorMessage(idError);
    setKeyErrorMessage(keyError);

    return id === dummyEmployeeId && key === dummySecretKey;
  }
  
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
            <h2 className="p-6">lead Transfer</h2>
          </div>

          <div className="mx-9">
            <div className="task-name pt-6">
              <h2 className="font-semibold py-2">Employee Id</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
                value={employeeId}
                onChange={handleEmployeeIdChange}
              />
              {idErrorMessage && (
                <div className="text-red-500 text-center mt-2">
                  <p>{idErrorMessage}</p>
                </div>
              )}
            </div>
            <div className="task-name pt-6">
              <h2 className="font-semibold py-2">Secret Key</h2>
              <input
                type="text"
                className="border w-full border-gray-400 rounded-md p-1"
                value={secretKey}
                onChange={handleSecretKeyChange}
              />
              {keyErrorMessage && (
                <div className="text-red-500 text-center mt-2">
                  <p>{keyErrorMessage}</p>
                </div>
              )}
            </div>
          </div>

          <div className="notes-btn-wrap flex justify-center m-auto pb-10 mt-4 mx-9">
            <button
              className={`cancel w-1/2 bg-blue-400 text-white text-center cursor-pointer py-3 px-4 ml-2 mr-3 rounded-sm font-semibold ${isButtonDisabled ? 'disabled-button' : ''}`}
              onClick={handleSaveClick}
              disabled={isButtonDisabled}
            >
              Save
            </button>
          </div>



          {/* Add success message here */}
          {/* For example: */}
          {/* {successMessage && (
    <div className="text-green-500 text-center mt-2">{successMessage}</div>
  )} */}
        </div>



      </Modal>


      <VerificationModal
        visible={isVerificationModalVisible}
        onCancel={handleVerifyModalCancel}
      />

    </>
  );
};

export default TransferModal;
