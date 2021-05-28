import React from 'react';
import styled from 'styled-components';
import DetailComments from './Components/DetailComments';
import DetailDriverInfo from './Components/DetailDriverInfo';
import DetailReserve from './Components/DetailReserve';

function DetailDrivers() {
  return (
    <General>
      <DetailMain>
        <DetailDriverInfo />
        <DetailComments />
      </DetailMain>
      <DetailReserve />
    </General>
  );
}

export default DetailDrivers;

const General = styled.section`
  ${({ theme }) => theme.flexBox('center', 'stretch')}

  height: 100%;
  background-color: ${({ theme }) => theme.white};
`;

const DetailMain = styled.header`
  ${({ theme }) => theme.flexBox()}

  flex-direction: column;
  width: 700px;
  height: auto;
  margin: 120px 30px 300px 0;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.white};
`;
