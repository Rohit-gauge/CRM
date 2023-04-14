import React, { useContext } from "react";
import { Col, Row } from "antd";
import { CardDataContext } from "../../../components/cardContext/CardContext";
import { BsThreeDotsVertical } from "react-icons/bs";

const Email = () => {
  const cardData = useContext(CardDataContext);
  return (
    <div className="h-full overflow-auto">
      <div style={{ height: "400px", overflow: "auto" }}>
        <div className="mb-6 mx-6">
          <div className="email-info-wrap rounded-lg shadow-md p-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-1/5">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} />
                    </div>
                  </div>
                  <div className="w-full  ml-1 ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <h4 className="text-sm font-normal ">{cardData.email}</h4>
                    <p className="text-gray-600 text-xs  call-time">4h ago</p>

                    <div className="dot-icon absolute top-0 right-0">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">
                    Inquiry about your Product
                  </div>
                  <p>
                    {" "}
                    I am interested in learning more about your pricing and
                    implementation process, as well as any ongoing support or
                    maintenance services that you offer.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mb-6 mx-6">
          <div className="email-info-wrap rounded-lg shadow-md p-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-1/5">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">Mathew</h3>
                    <h4 className="text-sm font-normal ">mathew@gmail.com</h4>
                    <p className="text-gray-600 text-xs relative  call-time">
                      4h ago
                    </p>

                    <div className="dot-icon absolute top-0 right-0">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">
                    Follow-up on our meeting
                  </div>
                  <p>
                    {" "}
                    I am interested in learning more about your pricing and
                    implementation process, as well as any ongoing support or
                    maintenance services that you offer.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mb-6 mx-6">
          <div className="email-info-wrap rounded-lg shadow-md p-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-1/5">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">Mathew</h3>
                    <h4 className="text-sm font-normal ">mathew@gmail.com</h4>
                    <p className="text-gray-600 text-xs relative  call-time">
                      4h ago
                    </p>

                    <div className="dot-icon absolute top-0 right-0">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap p-2 px-4">
                  <div className="call-description ">
                    Follow-up on our meeting
                  </div>
                  <p>
                    {" "}
                    I am interested in learning more about your pricing and
                    implementation process, as well as any ongoing support or
                    maintenance services that you offer.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Email;
