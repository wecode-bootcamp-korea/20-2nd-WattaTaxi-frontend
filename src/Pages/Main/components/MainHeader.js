import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { bold, size, color } from '../../List/Components/fontStyle';
import axios from 'axios';
import { API } from '../../../config';
import SliderBtn from './js/SliderBtn';

function MainHeader() {
  const [station, setStation] = useState([]);
  const [loading, setLoading] = useState(false);

  const STAION_TOTAL_NUM = Math.floor(station.length / 4);
  const slideRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(API.STATION);
        setStation(result.data.station);
      } catch (error) {
        console.log('ERROR : 정류장의 정보가 존재하지 않습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HeaderContainer>
      <Header aria-label="수상택시 정거장 정보">
        <MainTitle>
          <h1 title="Station HeadLine">어디로 떠나세요?</h1>
        </MainTitle>
        <SliderBtn
          optionId="stationBtn"
          stationTotalNum={STAION_TOTAL_NUM}
          slideRef={slideRef}
        />
        <SliderSection>
          {loading ? (
            <div>
              <p>🔎 정거장을 불러오고 있습니다..</p>
            </div>
          ) : (
            <SliderContainer ref={slideRef}>
              {station.map((station, index) => (
                <SliderItem key={index}>
                  <img src={station.imageUrl} alt="정거장 이미지" />
                  <ItemContent>
                    <StationContent>
                      <StationName>{station.stationName}</StationName>
                      <span>{station.description}</span>
                    </StationContent>
                  </ItemContent>
                  <DetailBtn>둘러보기</DetailBtn>
                </SliderItem>
              ))}
            </SliderContainer>
          )}
        </SliderSection>
        <SliderBtn
          optionId="stationBtn"
          stationTotalNum={STAION_TOTAL_NUM}
          slideRef={slideRef}
        />
      </Header>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div.attrs({
  alt: '메인페이지 헤드라인',
})``;

const Header = styled.header`
  position: relative;
  margin-bottom: 64px;
`;

const MainTitle = styled.div`
  margin: 56px 0px 32px;

  h1 {
    ${size('head')};
    ${bold};
    line-height: 48px;
  }
`;

const SliderSection = styled.div`
  overflow: hidden;
`;

const SliderContainer = styled.div`
  ${({ theme }) => theme.flexBox('between')};
  width: 100%;
  margin: auto;
`;

const SliderItem = styled.div`
  position: relative;
  margin: 0 1%;
  height: 360px;
  min-width: 23%;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);

  &:hover {
    img {
      transform: scale(1.3);
      transition-duration: 4s;
    }
  }

  img {
    width: 100%;
    height: 360px;
    border-radius: 8px;
    object-fit: cover;
    filter: contrast(80%) brightness(1.1);
    transition-duration: 2s;
    transition-timing-function: ease-out;
  }
`;

const ItemContent = styled.div`
  position: absolute;
  top: 32px;
  left: 24px;
  ${size('md_head')};
`;

const StationContent = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  ${size('md_head')};
  color: ${({ theme }) => theme.lightGray};

  span {
    font-size: 18px;
  }
`;
const StationName = styled.strong`
  display: block;
  margin-bottom: 8px;
`;

const DetailBtn = styled.button.attrs({
  type: 'button',
  alt: '정거장 자세히보기 버튼',
})`
  position: absolute;
  width: 75px;
  padding: 10px;
  left: 24px;
  bottom: 28px;
  border-radius: 4px;
  background-color: #fff;
  ${bold};
  ${size('s')};
  ${color(400)}
  cursor: pointer;
`;

export default MainHeader;
