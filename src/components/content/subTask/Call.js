import React, { useContext } from "react";
import { Col, Row } from "antd";
import { CardDataContext } from "../../../components/cardContext/CardContext";
import { HiDocumentText } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'

const Call = () => {
  const cardData = useContext(CardDataContext);
  return (
    <div className="h-full overflow-auto "  style={{ overflowX: "auto" }}>
      <div className="" style={{ height: "400px", overflow: "auto" }}>
        <div className="mb-6 mx-6  ">
          <div className="call-info-wrap rounded-lg shadow-md  pb-2 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-1/5 ">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} alt="test-img" />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <p className="text-gray-600 text-xs  call-time">
                      10th March 2022, 6:30 pm
                    </p>
                  </div>

                  <div className="add-note absolute right-14">
                  <button className="mb-3 text-blue-500 font-semibold flex">
                                <span className="p-1 "><AiOutlinePlus className="font-bold" /></span> Add Notes
                              </button>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Call description</div>
                  <p>
                    {" "}
                    Lead rescheduled call to discuss how the company's services
                    can improve the lead's life
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Outcome</div>
                  <p> Reschedule</p>
                </div>
              </Col>
             
            </Row>

            <div>
            <button className="mb-3 bg-blue-400 mt-1  px-3 rounded-2xl hover:bg-blue-700 text-white flex m-4 mb"><span>1</span> <HiDocumentText className="mt-1" /></button>
            </div>
          </div>
        </div>


        <div className="mb-6 mx-6">
          <div className="call-info-wrap rounded-lg shadow-md ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-1/5">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} alt="test-img" />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <p className="text-gray-600 text-xs  call-time">
                      10th March 2022, 6:30 pm
                    </p>
                  </div>
                  <div className="add-note absolute right-14">
                  <button className="mb-3 text-blue-500 font-semibold flex">
                                <span className="p-1 "><AiOutlinePlus className="font-bold" /></span> Add Notes
                              </button>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Call description</div>
                  <p>
                    {" "}
                    The call ended on a positive note, with the lead indicating a desire to learn more about the company's services and expressing willingness to continue the conversation.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="description-wrap p-2 px-4">
                <div className="call-description ">Outcome</div>
                  <p> Reschedule</p>
                </div>
              </Col>
             
            </Row>

            <div className="pb-2">
            <button className="mb-3 bg-blue-400 mt-1  px-3 rounded-2xl hover:bg-blue-700 text-white flex m-4 mb"><span>1</span> <HiDocumentText className="mt-1" /></button>
            </div>
          </div>
        </div>

{/* 
        <div className="mb-6">
          <div className="call-info-wrap rounded-lg shadow-md ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="w-1/12 ">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} alt="test-img" />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <p className="text-gray-600 text-xs  call-time">
                      10th March 2022, 6:30 pm
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Call description</div>
                  <p>
                    {" "}
                    Lead rescheduled call to discuss how the company's services
                    can improve the lead's life
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Call Type</div>
                  <p> Outgoing</p>
                </div>
              </Col>
              <Col span={8}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Purpose</div>
                  <p> Sales pitch call</p>
                </div>
              </Col>
              <Col span={8}>
                {" "}
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">Outcome</div>
                  <p> Reschedule</p>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Call;
