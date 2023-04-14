import React, { useContext } from "react";
import { Col, Row } from "antd";
import { CardDataContext } from "../../../components/cardContext/CardContext";
import { BsThreeDotsVertical } from "react-icons/bs";

const NotesList = () => {
  const cardData = useContext(CardDataContext);
  return (
    <div className="h-full overflow-auto">
      <div style={{ height: "400px", overflow: "auto" }}>
        <div className="mb-6 mx-6 ">
          <div className="call-info-wrap rounded-lg shadow-md ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-16 ">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <p className="text-gray-600 text-xs  call-time">
                      10th March 2022, 6:30 pm
                    </p>
                  </div>

                  <div className="dot-icon absolute top-3 right-3">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="notes-info-wrap px-5">
                  Interested in specific product features, send more
                  information.
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="notes-update-wrap px-5  flex mb-4 ">
                  <button className="edit mr-2">Edit</button>
                  <button className="del">Delete</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="mb-6 mx-6">
          <div className="call-info-wrap rounded-lg shadow-md ">
            <Row>
              <Col span={24}>
                <div className="flex  pt-4 pb-1 ">
                  <div className="lg:w-1/12 w-16  ">
                    <div className="card-img-wrap relative ">
                      <img className="call-image ml-4  " src={cardData.image} />
                    </div>
                  </div>
                  <div className="w-full  ">
                    <h3 className="text-sm font-medium ">{cardData.title}</h3>
                    <p className="text-gray-600 text-xs  call-time">
                      10th March 2022, 6:30 pm
                    </p>
                  </div>

                  <div className="dot-icon absolute top-3 right-3">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="notes-info-wrap px-5">
                  Interested in specific product features, send more
                  information.
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="notes-update-wrap px-5  flex mb-4 ">
                  <button className="edit mr-2">Edit</button>
                  <button className="del">Delete</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesList;
