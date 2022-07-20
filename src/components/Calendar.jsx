import React from 'react';
import 'antd/dist/antd.min.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  const onChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const disabledDates = (current) =>
    current.isAfter(moment().subtract(1, 'day'));

  const dateFormat = 'DD/MM/YYYY';

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <DatePicker
        size={'large'}
        style={{
          width: '100%',
        }}
        onChange={onChange}
        disabledDate={disabledDates}
        format={dateFormat}
      />
    </Space>
  );
};
