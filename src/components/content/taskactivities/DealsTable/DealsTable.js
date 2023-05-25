import React from 'react';
import { Table, Tooltip } from 'antd';
import { AiOutlineCalendar } from 'react-icons/ai';

const DealsTable = () => {
  const isMobile = window.innerWidth <= 768; // define a variable to check if the current screen is mobile
  const dataSource = [
    {
      key: '1',
      title: 'Deal01',
      name: 'John',
      oamt: 1000,
      oqty: 10,
      ecd: '10 jan 2023',
      da: 5000,
    },
    {
      key: '2',
      title: 'Deal02',
      name: 'Mike',
      oamt: 2000,
      oqty: 20,
      ecd: '10 jan 2023',
      da: 8000,
    },
    {
      key: '3',
      title: 'Deal03',
      name: 'Sarah',
      oamt: 3000,
      oqty: 15,
      ecd: '10 jan 2023',
      da: 10000,
    },
    {
      key: '4',
      title: 'Deal05',
      name: 'Sarah',
      oamt: 4000,
      oqty: 25,
      ecd: '10 jan 2023',
      da: 12000,
    },
    {
      key: '5',
      title: 'Deal06',
      name: 'Sarah',
      oamt: 5000,
      oqty: 30,
      ecd: '10 jan 2023',
      da: 15000,
    },
  ];

  const columns = [
    {
      title: isMobile ? (
        <Tooltip  title="Deal Title ">Title</Tooltip> // Wrap the shortened text inside a tooltip
      ) : (
        'Deal Title'
      ),
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: isMobile ? (
        <Tooltip title="Order Amount">Amt</Tooltip> // Wrap the shortened text inside a tooltip
      ) : (
        'Order Amount'
      ),
      dataIndex: 'oamt',
      key: 'oamt',
    },
    {
      title: isMobile ? (
        <Tooltip title="Order Quantity">Qty</Tooltip> // Wrap the shortened text inside a tooltip
      ) : (
        'Order Quantity'
      ),
      dataIndex: 'oqty',
      key: 'oqty',
    },
    {
      title: isMobile ? (
        <Tooltip title="Expected Closing Date">
         ECD
        </Tooltip> // Wrap the icon inside a tooltip
      ) : (
        'Expected Closing Date'
      ),
      dataIndex: 'ecd',
      key: 'ecd',
    },
    {
      title: isMobile ? (
        <Tooltip title="Deal Amount">Amt</Tooltip> // Wrap the shortened text inside a tooltip
      ) : (
        'Deal Amount'
      ),
      dataIndex: 'da',
      key: 'da',
    },
  ];

  return (
    <div className="h-full px-2 mx-4">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default DealsTable;
