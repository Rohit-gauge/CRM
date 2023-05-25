import React, {useState} from "react";
import { Modal } from "antd";
import { Select } from "antd";

import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Option } = Select;
const CreateTicket = ({ visible, onCancel }) => {

    const [validationErrors, setValidationErrors] = useState({});

    const handleCreateLead = () => {
        const errors = {};
        const phoneField = document.getElementById("phone");
        const urgencyField = document.getElementById("urgency");
        const subjectField = document.getElementById("subject");
        const detailsField = document.getElementById("details");

        if (!phoneField.value) {
            errors.phone = "Phone number is required";
        }

        if (!urgencyField.value) {
            errors.urgency = "Issue urgency is required";
        }

        if (!subjectField.value) {
            errors.subject = "Ticket subject is required";
        }

        if (!detailsField.value) {
            errors.details = "Ticket details are required";
        }

        setValidationErrors(errors);

      
    };

    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            closable={true}
            maskClosable={true}
            closeIcon={<CloseOutlined />}
            className="rounded-sm "
            // width={600}
        >
            {/* Add your modal content here */}
            <div className="note-moadal-wrap call-modal rounded-sm">
                <div className="header flex justify-center items-center text-center bg-gray-200 rounded-sm">
                    <h2 className="p-6">Create Ticket</h2>
                </div>

                <div className="mx-9">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                        <div className="task-name pt-3">
                            <h2 className="font-semibold py-2 relative w-fit">
                                Customer Contact Number
                                <span className="text-red-500 absolute top-2">*</span>
                            </h2>
                            <input
                                type="text"
                                id="phone"
                                className="border w-full border-gray-400 rounded-md p-1"
                            />
                            {validationErrors.phone && (
                                <p className="text-red-500 text-sm">{validationErrors.phone}</p>
                            )}
                        </div>
                        <div className="w-full pt-3 rounded-lg">
                            <h2 className="call-outcome font-semibold py-2 relative">
                                Issue Urgency
                                <span className="text-red-500 absolute top-2">*</span>
                            </h2>
                            <div className="outcome-option">
                                <select
                                    defaultValue=""
                                    id="urgency"
                                    className="rounded-md p-1 border-line focus:outline-none w-full"
                                >
                                    <option value="" disabled>
                                        Select urgency
                                    </option>
                                    <option value="high">High Priority</option>
                                    <option value="low">Low Priority</option>
                                    <option value="cold">Cold Lead</option>
                                    <option value="warm">Warm Lead</option>
                                </select>
                                {validationErrors.urgency && (
                                    <p className="text-red-500 text-sm">
                                        {validationErrors.urgency}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4  ">
                        <div className="taskname pt-3">
                            <h2 className="font-semibold py-2 relative w-fit">
                                Ticket Subject
                                <span className="text-red-500 absolute top-2"></span>
                            </h2>
                            <input
                                type="text"
                                id="subject"
                                className="border w-full border-gray-400 rounded-md p-1"
                            />
                            {validationErrors.subject && (
                                <p className="text-red-500 text-sm">{validationErrors.subject}</p>
                            )}
                        </div>
                        <div className="task-details pt-3">
                            <h2 className="font-semibold py-2 relative w-fit">
                                Ticket Details
                                <span className="text-red-500 absolute top-2"></span>
                            </h2>
                            <textarea
                                id="details"
                                className="border w-full border-gray-400 rounded-md p-1 resize-none"
                                rows="4"
                            ></textarea>
                            {validationErrors.details && (
                                <p className="text-red-500 text-sm">{validationErrors.details}</p>
                            )}
                        </div>
                    </div>
                    <div className="create-lead-btn flex m-auto w-fit p-6 ">
            <button  onClick={handleCreateLead} className="w-full text-white bg-blue-400 text-center cursor-pointer py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300">
            Create Ticket
            </button>
          </div>
                   
                </div>
            </div>
        </Modal>
    );
};

export default CreateTicket;
