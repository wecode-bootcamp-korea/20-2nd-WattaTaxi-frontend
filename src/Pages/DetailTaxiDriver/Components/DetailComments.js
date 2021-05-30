import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DetailComments = () => {
  const [starValue, SetstarValue] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [commentValue, SetcommentValue] = useState([]);

  // star value 계산 함수 (index까지 true로 바꿔서 배열 리턴)
  const updateStarValue = index => {
    let booleanStar = [...starValue];
    for (let i = 0; i < starValue.length; i++) {
      index >= i ? (booleanStar[i] = true) : (booleanStar[i] = false);
    }
    SetstarValue(booleanStar);
  };

  return (
    <CommentContainer>
      <CommentTitle>후기</CommentTitle>
      <CommentLine></CommentLine>
      <CommentHeader>
        <CommentRating>
          <CommentRatingTitle>후기 평균 별점</CommentRatingTitle>
          <CommentRatingGrade>4.5</CommentRatingGrade>
        </CommentRating>
        <CommentDetail>
          <p>와따 택시 운행에 만족하셨나요?</p>
          <RatingStar>
            {starValue.map((eachStarValue, starIndex) => (
              <button onClick={() => updateStarValue(starIndex)}>
                <I color={eachStarValue} className="fas fa-star" />
              </button>
            ))}
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
  );
};

export default DetailComments;

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
`;

const I = styled.i`
  color: ${props => (props.color ? ({ theme }) => theme.main : 'gray')};
  font-size: 40px;
  margin: 5px;
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

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;

  i {
    font-size: 10px;
    color: gray;
  }
`;
