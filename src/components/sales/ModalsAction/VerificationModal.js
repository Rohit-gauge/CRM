import React, { useState } from "react";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const VerificationModal = ({ visible, onCancel, onOk }) => {



    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            closable={true}
            maskClosable={true}
            closeIcon={<CloseOutlined />}
            className="rounded-sm my-custom-transfer-class"
            width={410}
        >
            {/* Add your modal content here */}
            <div className="note-moadal-wrap rounded-sm">


                <div className="flex  flex-col  justify-center items-center p-10">
                    <svg className="check-lead" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="24 / basic / check-mark">
                            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 14.2929L19 5L20.4142 6.41421L9.70711 17.1213L4 11.4142L5.41421 10L9.70711 14.2929Z" fill="black" />
                        </g>
                    </svg>

                    <h2 className="text-lg text-blue-400 font-bold">Lead has been Transfered</h2>
                </div>



                {/* Add success message here */}
                {/* For example: */}
                {/* {successMessage && (
    <div className="text-green-500 text-center mt-2">{successMessage}</div>
  )} */}
            </div>



        </Modal>
    );
};

export default VerificationModal;
