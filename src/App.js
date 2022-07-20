import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';
import { useAxios } from './hooks/useAxios.js';
import 'antd/dist/antd.min.css';
import { Button, Typography, Row, Col } from 'antd';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const { data, loading, fetchData } = useAxios(selectedCountry, selectedDate);
  const { value } = selectedCountry;
  const { Title } = Typography;

  return (
    <>
      <Row>
        <Title level={3} style={{ color: '#140c53', margin: '16px' }}>
          React sunset sunrise app
        </Title>
      </Row>
      <Row gutter={[16, 24]} justify="space-around" style={{ margin: '16px' }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <CountrySelect
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        {/* <Col md={24} lg={12} offset={12}> */}
        <Col justify="center">
          <Button
            onClick={() => fetchData()}
            disabled={!selectedDate || !value}
          >
            Show
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 48]}>
        {data ? <div>{data.results.sunset}</div> : ''}
        <div>Attribution</div>
      </Row>
    </>
  );
};
