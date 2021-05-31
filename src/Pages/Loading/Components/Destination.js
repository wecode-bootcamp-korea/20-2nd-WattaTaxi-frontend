import React from 'react';
import styled from 'styled-components';

function Destination({ code, spot, date }) {
  const [year, month, day] = date.split('-');

  return (
    <Container>
      <Code>{code}</Code>
      <Spot>{spot}</Spot>
      <Date>{`${year}년 ${month}월 ${day}일`}</Date>
    </Container>
  );
}

export default Destination;

const Container = styled.div`
  color: #e7f4fd;
  text-align: center;
`;

const Code = styled.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;

const Spot = styled.p`
  margin: 2px 0;
  font-size: 13px;
  line-height: 16px;
`;

const Date = styled.p`
  margin-top: 8px;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 16px;
`;
