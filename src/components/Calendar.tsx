import React from 'react';
import 'antd/dist/antd.min.css';
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export const Calendar = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);
