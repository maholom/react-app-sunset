import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';
import { useAxios } from './hooks/useAxios.js';
import 'antd/dist/antd.min.css';
import { Button, Typography, Row, Col, Spin } from 'antd';
import sun from './icons/sun.png';
import moon from './icons/moon.png';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const { data, loading, fetchData } = useAxios(selectedCountry, selectedDate);
  const { value } = selectedCountry;
  const { Title } = Typography;
  const { Paragraph } = Typography;

  return (
    <>
      <Row gutter={[16, 24]} justify="space-around">
        <Title level={3} style={{ color: '#140c53', margin: '16px' }}>
          React sunset sunrise app
        </Title>
      </Row>
      <Row gutter={[16, 24]} justify="space-around">
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <CountrySelect
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button
            style={{ marginTop: '32px' }}
            onClick={() => fetchData()}
            disabled={!selectedDate || !value}
          >
            <img
              src={sun}
              alt={'moon icon'}
              style={{
                maxHeight: '18px',
                paddingRight: '4px',
                paddingBottom: '4px',
              }}
            />
            Show
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Row Row justify="center" style={{ marginTop: '24px' }}>
          <Spin size="large" />
        </Row>
      ) : (
        ''
      )}

      {data ? (
        <>
          <hr
            style={{
              background: 'black',
              color: 'black',
              borderColor: 'black',
              height: '0.3px',
              maxWidth: '500px',
              marginTop: '36px',
            }}
          />

          <Row justify="space-around">
            <Title level={4} style={{ color: '#140c53', marginTop: '48px' }}>
              <img
                src={sun}
                alt={'sun icon'}
                style={{ maxHeight: '16px', paddingRight: '4px' }}
              />
              Sunrise is at {data.results.sunrise}
            </Title>
          </Row>
          <Row justify="space-around">
            <Title level={4} style={{ color: '#140c53' }}>
              <img
                src={moon}
                alt={'moon icon'}
                style={{ maxHeight: '16px', paddingRight: '4px' }}
              />
              Sunset is at {data.results.sunset}
            </Title>
          </Row>
          <Row>
            <Paragraph
              level={1}
              style={{ marginTop: '86px', marginLeft: '16px' }}
            >
              Attributions: {''}
              <a
                href="https://https://sunrise-sunset.org/api"
                title="sunset api"
              >
                Sunset and sunrise times API
              </a>
              <span> & </span>
              <a
                href="https://www.flaticon.com/de/kostenlose-icons/sonne"
                title="sonne Icons"
              >
                Sonne and Mond Icons made by Good Ware - Flaticon
              </a>
            </Paragraph>
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
};
