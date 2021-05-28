import React from 'react';
import styled from 'styled-components';

function DetailDriverInfo() {
  return (
    <>
      <DriverTitle>
        <TitleContent>
          <h1>[Watta Taxi] 이다슬 기사님</h1>
        </TitleContent>
        <TitleRating>
          <ReviewStar>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </ReviewStar>
          <TitleRatingGrade>
            <p>4.5</p>
          </TitleRatingGrade>
        </TitleRating>
      </DriverTitle>
      <DriverDescription>
        <DriverImg
          alt="기사님 사진"
          src="https://i.pinimg.com/564x/04/3b/84/043b84c637e4452d658c3cf34337df4d.jpg"
        />
        <DriverIntroduction>
          <div>성함 : </div>
          <div>회사 : </div>
          <div>소개 : </div>
          <div>평균 별점 : </div>
        </DriverIntroduction>
      </DriverDescription>
    </>
  );
}

export default DetailDriverInfo;

const DriverTitle = styled.header`
  ${({ theme }) => theme.flexBox()}

  flex-direction: column;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.white};
`;

const TitleContent = styled.div`
  color: #343a40;
  font-weight: 700;
  font-size: 32px;
`;

const TitleRating = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
`;

const TitleRatingGrade = styled.div`
  font-size: 12px;
`;

//기사님 사진, 소개
const DriverDescription = styled.article`
  ${({ theme }) => theme.flexBox('start', 'center')}
`;

const DriverImg = styled.img`
  width: 250px;
  height: 300px;
  margin: 20px;
`;

const DriverIntroduction = styled.div`
  font-size: 18px;
  margin: 20px;
`;

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;

  i {
    font-size: 10px;
    color: grey;
  }
`;
