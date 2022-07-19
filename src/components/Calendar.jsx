import React from 'react';
import 'antd/dist/antd.min.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const onChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };

  const disabledDates = (current) =>
    current.isAfter(moment().subtract(1, 'day'));

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} disabledDate={disabledDates} />
    </Space>
  );
};
