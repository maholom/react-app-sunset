import React from 'react';
import 'antd/dist/antd.min.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

export const Calendar = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const disabledDates = (current) =>
    current.isAfter(moment().subtract(1, 'day'));

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} disabledDate={disabledDates} />
    </Space>
  );
};
