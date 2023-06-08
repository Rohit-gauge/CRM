import React, { useContext } from "react";
import { Col, Row } from "antd";
import { CardDataContext } from "../../../components/cardContext/CardContext";
import { BsThreeDotsVertical } from "react-icons/bs";

const Email = () => {
  const cardData = useContext(CardDataContext);
  return (
    <div className="h-full overflow-auto">
      <div style={{ height: "400px", overflow: "auto" }} className="mb-20">
      <div className="mb-6 mx-6">
          <div className="email-info-wrap rounded-lg shadow-md px-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                 
                  </div>
                  <div className="rw-full   ">
                    <h3 className="text-sm font-medium ">Mathew</h3>
                    <h4 className="text-sm font-normal ">mathew@gmail.com</h4>
                   

                    <div className="dot-icon absolute top-3 right-3">
                    <p className="text-gray-600 text-xs relative  call-time">
                      5h ago
                    </p>
                    </div>
                  </div>
          
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap ">
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
          <div className="email-info-wrap rounded-lg shadow-md px-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                 
                  </div>
                  <div className="rw-full   ">
                    <h3 className="text-sm font-medium ">Mathew</h3>
                    <h4 className="text-sm font-normal ">mathew@gmail.com</h4>
                   

                    <div className="dot-icon absolute top-3 right-3">
                    <p className="text-gray-600 text-xs relative  call-time">
                      5h ago
                    </p>
                    </div>
                  </div>
          
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap ">
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
          <div className="email-info-wrap rounded-lg shadow-md px-4 ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                 
                  <div className="rw-full   ">
                    <h3 className="text-sm font-medium ">Mathew</h3>
                    <h4 className="text-sm font-normal ">mathew@gmail.com</h4>
                  

                    <div className="dot-icon absolute top-3 right-3">
                    <p className="text-gray-600 text-xs relative  call-time">
                      6h ago
                    </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="description-wrap ">
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
