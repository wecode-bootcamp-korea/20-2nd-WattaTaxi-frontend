import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { bold, size, color } from '../../List/Components/fontStyle';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../../config';
import SliderBtn from './js/SliderBtn';

function MainTaxi() {
  const history = useHistory();

  const goToDeTailPage = driver => {
    history.push(`/detail/${driver.id}`);
  };
  const [drivers, setDrivers] = useState([]);
  const [statusOption, setStatusOption] = useState('rating');

  const DRIVER_TOTAL_NUM = Math.floor(drivers.length / 4);
  const slideRef = useRef(null);

  const getSortedData = e => {
    setStatusOption(e.target.id);
  };

  useEffect(() => {
    const labelSorting = statusOption === 'rating' ? 'rating' : 'review';
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${API.TAXI_DRIVER_DETAIL}?sort=${labelSorting}`
        );
        setDrivers(result.data.drivers);
      } catch (error) {
        console.log('ERROR : 기사님의 정보를 받아오는데 실패하였습니다.');
      }
    };

    fetchData();
  }, [statusOption]);

  return (
    <TaxiContainer role="region">
      <h1 title="TaxiDriver HeadLine">오늘의 기사님을 확인해보세요!</h1>
      <LabelContainer>
        <LabelButton
          id="rating"
          onClick={getSortedData}
          statusOption={statusOption} // css에서 사용됌.
        >
          ⭐️ 별점 순
        </LabelButton>
        <LabelButton
          id="review"
          onClick={getSortedData}
          statusOption={statusOption} // css에서 사용됌.
        >
          📝 리뷰 많은 순
        </LabelButton>
      </LabelContainer>
      <DriverLayout>
        <h3 title="Driver recommendation">이 기사님은 어떠세요?</h3>
        <SliderBtn
          optionId="driverBtn"
          driverTotalNum={DRIVER_TOTAL_NUM}
          slideRef={slideRef}
        />
        <TaxiMotionContainer>
          <marquee>
            <font size={10}>🚤</font>
          </marquee>
          <div className="waterLine" />
        </TaxiMotionContainer>
        <SliderSection>
          <DriverContainer ref={slideRef}>
            {drivers.map((driver, index) => (
              <Driver
                key={index}
                onClick={() => {
                  goToDeTailPage(driver);
                }}
              >
                <img src={driver.profile_url} alt="택시기사 프로필사진" />
                <DriverInfo>
                  <CompanyContent>
                    <span className="companyInfo">서울 . 수상택시</span>
                    <p className="companyName">{driver.taxi_company_name}</p>
                  </CompanyContent>
                  <DriverContent>
                    <h2>{driver.name}</h2>
                    <p>{driver.introduction}</p>

                    <ReviewContent>
                      <span>
                        ⭐️{Math.round(driver.average_rating * 10) / 10}
                      </span>
                      <h4>📝Review : {driver.review_count}</h4>
                    </ReviewContent>
                  </DriverContent>
                </DriverInfo>
              </Driver>
            ))}
          </DriverContainer>
        </SliderSection>
        <SliderBtn
          optionId="driverBtn"
          driverTotalNum={DRIVER_TOTAL_NUM}
          slideRef={slideRef}
        />
      </DriverLayout>
    </TaxiContainer>
  );
}

const TaxiContainer = styled.section`
  width: 100%;
  h1 {
    margin-bottom: 30px;
    ${bold};
    ${size('sm_head')}
    line-height: 24px;
  }
`;

const LabelContainer = styled.div`
  ${({ theme }) => theme.flexBox('start')}
`;

const LabelButton = styled.button.attrs({
  type: 'button',
  alt: '기사 순서정렬 버튼',
})`
  ${({ theme }) => theme.flexBox('center', 'center')};
  padding: 15px;
  width: 200px;
  border: 1px solid #dee2e6;
  border-radius: 5px 5px 0 0;
  background-color: ${props =>
    props.id === props.statusOption ? props.theme.main : 'transparent'};
  border-bottom: 0;
  font-weight: 400;
  font-size: 18px;
  size: 40px;
  letter-spacing: 1px;
  ${color(400)};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.main};
    transition: ease-in-out 200ms;
  }
`;

const DriverLayout = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  position: relative;
  width: 100%;
  border: 1px solid #dee2e6;
  h3 {
    margin: 20px 0 0 20px;
    ${size('l')};
    ${bold};
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;
const TaxiMotionContainer = styled.div`
  .waterLine {
    position: relative;
    bottom: 10px;
    border-bottom: 8px solid ${({ theme }) => theme.skyBlue};
  }
`;

const SliderSection = styled.div`
  width: 100%;
  overflow: hidden;
`;

const DriverContainer = styled.div`
  ${({ theme }) => theme.flexBox('start')}
  padding-bottom: 50px;
`;
const Driver = styled.div`
  position: relative;
  margin: 0 1%;
  min-width: 23%;
  height: 415px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 16%);
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);
    background-color: ${({ theme }) => theme.lightGray};
    border: 1px solid ${({ theme }) => theme.skyBlue};
    transition: all 200ms ease-in-out;
    h2 {
      transition: all 100ms ease-in-out;
      font-size: 16px;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 230px;
    border-radius: 4px;
  }
`;

const DriverInfo = styled.div`
  ${({ theme }) => theme.columnFlexBox('between')}
  padding: 8px 16px 7px;

  p {
    ${size('xxs')};
  }
`;

const CompanyContent = styled.div`
  .companyInfo {
    display: block;
    margin-bottom: 5px;
    ${size('xxs')};
    letter-spacing: 2px;
    color: ${({ theme }) => theme.darkGray};
  }
  .companyName {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.blue};
  }
`;

const DriverContent = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    border-bottom: 1px dotted #848c94;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 20px;
    color: ${({ theme }) => theme.darkGray};
  }

  h4 {
    color: ${props => props.theme.darkGray};
  }
`;

const ReviewContent = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  position: absolute;
  margin-bottom: 10px;
  bottom: 0;

  span {
    margin-bottom: 5px;
  }
`;

export default MainTaxi;
