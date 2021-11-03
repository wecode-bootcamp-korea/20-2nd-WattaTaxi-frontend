import { css } from 'styled-components';

const flexMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  center: 'center',
};

//! justify-content
//? 브라우저 사이의 공간을 지정한 속성에 맞게  콘텐츠 항목의 공간을 배포하는 방법

//! display
//? display 속성은 웹 페이지의 레이아웃(layout)을 결정하는 CSS의 중요한 속성

//! align-item
//? flexbox의 속성중 항목을 정렬하는 역할을 담당한다.

//! flex-direction
//? 플렉스 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정합니다.

const flexBox = (js, ai) => css`
  display: flex;
  justify-content: ${flexMap[js] || js};
  align-items: ${flexMap[ai] || ai};
`;

const inlineFlexBox = (js, ai) => css`
  display: inline-flex;
  justify-content: ${flexMap[js] || js};
  align-items: ${flexMap[ai] || ai};
`;
const columnFlexBox = (js, ai) => css`
  display: flex;
  flex-direction: column;
  justify-content: ${flexMap[js] || js};
  align-items: ${flexMap[ai] || ai};
`;

const posCenter = (type = 'absolute') => css`
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const posCenterX = (type = 'absolute') => css`
  position: ${type};
  left: 50%;
  transform: translateX(-50%);
`;

const posCenterY = (type = 'absolute') => css`
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
`;

const mixin = {
  flexBox,
  inlineFlexBox,
  columnFlexBox,
  posCenter,
  posCenterX,
  posCenterY,
};

export default mixin;
