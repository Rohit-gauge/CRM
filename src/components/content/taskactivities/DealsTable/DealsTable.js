import React from 'react';
import { Table } from 'antd';


const DealsTable = () => {
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
      title: 'Deal Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Order Amount',
      dataIndex: 'oamt',
      key: 'oamt',
    },
    {
      title: 'Order Quantity',
      dataIndex: 'oqty',
      key: 'oqry',
    },
    {
      title: 'Expected Closing Date',
      dataIndex: 'ecd',
      key: 'ecd',
    },
    {
      title: 'Deal Amount',
      dataIndex: 'da',
      key: 'da',
    },
  ];

  return (
    <div className="h-full overflow-auto px-2 mx-4">
      <div style={{ height: "400px", overflow: "auto" }}>
    <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
    </div>
  )
}

export default DealsTable;
