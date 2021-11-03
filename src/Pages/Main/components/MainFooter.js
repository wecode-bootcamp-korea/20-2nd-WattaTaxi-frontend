import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { size, bold, color } from '../../List/Components/fontStyle';

function MainFooter() {
  const [SNSData, setSNSData] = useState([]);

  useEffect(() => {
    const footerData = async () => {
      try {
        const successData = await axios.get('/data/MockData.json');
        setSNSData(successData.data.sns);
      } catch (error) {
        console.log('ERROR: Footer 이미지에 대한 내용이 없습니다.');
      }
    };
    footerData();
  }, []);

  return (
    <Footer aria-label="혜택 및 SNS 광고">
      <PointBanner>
        <ImageContainer>
          <img src="./images/profile.png" aria-label="사용자이미지" />
        </ImageContainer>

        <BannerContent>
          <p className="bannerInfo" aria-label="광고내용">
            친구 초대하면 <strong>무제한 포인트</strong>를 드립니다!
          </p>
          <span>친구에게 5,000원 쿠폰을 선물하고 2,000 포인트를 받으세요.</span>
        </BannerContent>
        <ButtonContainer>
          <PointButton>포인트 받기</PointButton>
        </ButtonContainer>
      </PointBanner>
      <Section>
        <h1 title="여행 정보">Wa::tta Taxi의 여행 정보</h1>
        <SNSContainer>
          {SNSData.map((snsDatas, index) => (
            <SNSContent key={index}>
              <img src={snsDatas.imageUrl} alt="sns 로고 이미지" />
              <span className="snsPageName">{snsDatas.text}</span>
              <p>{snsDatas.description}</p>
            </SNSContent>
          ))}
        </SNSContainer>
      </Section>
    </Footer>
  );
}

const Footer = styled.footer`
  ${({ theme }) => theme.columnFlexBox()};
  margin: 100px auto 0;
  width: 1050px;
  bottom: 0;
`;

const PointBanner = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')}
  margin-bottom: 50px;
  height: 110px;
  border-radius: 4px;
  border: 1px solid #e7f4fd;
  background-color: #f5fbff;
`;

const ImageContainer = styled.div`
  ${({ theme }) => theme.flexBox('center')};
  width: 100px;
  img {
    ${({ theme }) => theme.flexBox('center')};
    width: 70px;
  }
`;

const BannerContent = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  flex-grow: 1;
  margin-left: 20px;
  height: 60px;

  .bannerInfo {
    margin-top: 5px;
    margin-bottom: 12px;
    ${size('l')};
    ${bold};
    strong {
      color: ${({ theme }) => theme.clearBlue};
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100px;
  margin-right: 20px;
`;

const PointButton = styled.button.attrs({
  type: 'button',
  alt: '포인트 받기 버튼',
})`
  padding: 13px 5px;
  width: 100px;
  ${size('s')};
  color: #fff;
  background-color: ${({ theme }) => theme.clearBlue};
  border-radius: 4px;
  cursor: pointer;
`;

const Section = styled.section`
  margin-bottom: 120px;
  letter-spacing: 0px;

  h1 {
    margin-bottom: 16px;
    color: #343a40;
    font-size: 24px;
    font-weight: 700;
  }
`;

const SNSContainer = styled.div`
  ${({ theme }) => theme.flexBox('center')}
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
`;

const SNSContent = styled.div`
  ${({ theme }) => theme.columnFlexBox()}
  padding: 40px 50px;
  &:last-child {
    margin-right: 0;
  }

  img {
    width: 32px;
    height: 30px;
    background-color: transparent;
  }

  .snsPageName {
    margin: 8px 0px 10px 0px;
    font-size: 15px;
    ${bold};
    color: ${({ theme }) => theme.clearBlue};
  }

  p {
    ${color(200)};
    ${size('s')};
    line-height: 1.71;
  }
`;

export default MainFooter;
