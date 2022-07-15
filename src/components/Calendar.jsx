import React from 'react';
import 'antd/dist/antd.min.css';
import { DatePicker, Space } from 'antd';

export const Calendar = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
    </Space>
  );
};
