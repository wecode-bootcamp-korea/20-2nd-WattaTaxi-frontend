import React from 'react';
import styled from 'styled-components';

function DetailDrivers() {
  return (
    <General>
      <DetailMain>
        {/* 기사님 정보 */}
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
        {/* 댓글창 */}
        <CommentContainer>
          <CommentTitle>후기</CommentTitle>
          <CommentLine></CommentLine>
          <CommentHeader>
            <CommentRating>
              <CommentRatingTitle>이용자 별점</CommentRatingTitle>
              <CommentRatingGrade>4.5</CommentRatingGrade>
            </CommentRating>
            <CommentDetail>
              <p>와따 택시 운행에 만족하셨나요?</p>
              <RatingStar>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </RatingStar>
              <CommentInput></CommentInput>
              <CommentButton>등록</CommentButton>
            </CommentDetail>
          </CommentHeader>
          <Review>
            <ReviewContainer>
              <UserContainer>
                <ReviewStar>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </ReviewStar>
                <Reviewer>daseul</Reviewer>
              </UserContainer>
              <ReviewContents>
                <p>택시 기사님이 너무 친절하셔서 기분이 좋았습니다.</p>
              </ReviewContents>
              <ReviewDeleteButton>
                <i class="fas fa-trash"></i>
              </ReviewDeleteButton>
            </ReviewContainer>
          </Review>
        </CommentContainer>
      </DetailMain>
      {/* 예약창 */}
      <DetailSide>
        <DateButton>
          <i class="fas fa-calendar-week"></i>
          <p>날짜를 선택해주세요</p>
        </DateButton>
        <DateButton>
          <i class="far fa-clock"></i>
          <p>시간을 선택해주세요</p>
        </DateButton>
        <ButtonContainer>
          <SeatButton>특가석</SeatButton>
          <SeatButton>일반석</SeatButton>
          <SeatButton>특별석</SeatButton>
          <CalculationButton>금액 조회하기</CalculationButton>
        </ButtonContainer>
        <ReserveLine></ReserveLine>
        <Price>20,000원</Price>
        <ReservationButton>예약하기</ReservationButton>
      </DetailSide>
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

// 타이틀
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

// 댓글 입력창
const CommentContainer = styled.section`
  ${({ theme }) => theme.flexBox('start', 'center')}

  flex-direction: column;
  margin-top: 50px;
`;

const CommentTitle = styled.div`
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
  padding-right: 600px;
`;

const CommentLine = styled.hr`
  width: 95%;
  color: black;
  size: 10px;
`;

const CommentInput = styled.input`
  border: 2px solid #d1d5d9;
  border-radius: 5px;
  width: 450px;
  height: 60px;
  outline: none;
`;

const CommentHeader = styled.div`
  ${({ theme }) => theme.flexBox('center', 'stretch')}
  width:100%;

  margin-top: 30px;
`;

const CommentRating = styled.article`
  ${({ theme }) => theme.flexBox('center', 'center')}

  flex-direction: column;
  padding: 0px 40px;
  margin: 10px 0;
  background-color: #f8f9fa;
`;

const CommentRatingTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
  color: #808991;
`;

const CommentRatingGrade = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const CommentDetail = styled.section`
  ${({ theme }) => theme.flexBox('center', 'center')}

  flex-direction: column;
  padding: 30px;
  background-color: #f8f9fa;
  margin: 10px 0 10px 20px;

  p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.blue};
  }
`;

const RatingStar = styled.div`
  margin-bottom: 10px;

  i {
    font-size: 40px;
    color: #666666;
    margin: 5px;
  }
`;

const CommentButton = styled.button`
  position: relative;
  margin-top: 10px;
  left: 200px;
`;

// 입력된 댓글창

const Review = styled.section`
  ${({ theme }) => theme.flexBox('start', 'center')}
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.white};
`;

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;

  i {
    font-size: 10px;
    color: grey;
  }
`;
const ReviewContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}

  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 20px;
  margin: 10px;
  border: 1px solid #d6e3f0;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}

  flex-direction: column;
  background-color: white;
  margin-right: 10px;
`;

const Reviewer = styled.p`
  font-size: 15px;
  justify-content: center;
  font-weight: 700;
`;

const ReviewContents = styled.div`
  width: 80%;
  height: 40px;
  background-color: white;
  text-align: center;
  font-size: 15px;
  p {
    line-height: 40px;
  }
`;

const ReviewDeleteButton = styled.div`
  font-size: 18px;
  padding-left: 20px;
`;

// 사이드바

const DetailSide = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
  border: 1px solid #dee2e6;

  width: 350px;
  height: 350px;
  margin-top: 120px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  flex-direction: column;
  position: sticky;
  top: 50px;
`;

const DateButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  background-color: #f5f6f7;
  color: #343a40;
  border: none;
  border-radius: 4px;

  :hover {
    border: 1px solid black;
  }
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
  margin-top: 20px;
`;

const SeatButton = styled.button`
  width: 60px;
  height: 30px;
  margin: 0px 5px 0px 0px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 5px;
  border: none;
`;

const CalculationButton = styled.button`
  outline: none;
  border: 0;
  background: none;
`;

const ReserveLine = styled.hr`
  width: 250px;
  margin: 20px 0px;
  color: #e9ecef;
`;

const Price = styled.p`
  font-size: 20px;
  padding-left: 180px;
`;

const ReservationButton = styled.button`
  width: 250px;
  margin-top: 20px;
  height: 40px;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 5px;
`;
