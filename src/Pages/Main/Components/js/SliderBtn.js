import { useState, useEffect, memo } from 'react';
import styled from 'styled-components/macro';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SliderBtn = ({ stationTotalNum, driverTotalNum, optionId, slideRef }) => {
  const [stationSlide, setStationSlide] = useState(0);
  const [driverSlide, setDriverSlide] = useState(0);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform =
      optionId === 'stationBtn'
        ? `translateX(-${stationSlide}00%)`
        : `translateX(-${driverSlide}00%)`;
  }, [driverSlide, optionId, slideRef, stationSlide]);

  const prevBtnFunc = () => {
    stationSlide === 0 && optionId === 'stationBtn'
      ? setStationSlide(stationTotalNum - 1)
      : setStationSlide(stationSlide - 1);
    driverSlide === 0 && optionId === 'driverBtn'
      ? setDriverSlide(driverTotalNum - 1)
      : setDriverSlide(driverSlide - 1);
  };

  const nextBtnFunc = () => {
    stationSlide === stationTotalNum - 1 && optionId === 'stationBtn'
      ? setStationSlide(0)
      : setStationSlide(stationSlide + 1);
    driverSlide === driverTotalNum - 1 && optionId === 'driverBtn'
      ? setDriverSlide(0)
      : setDriverSlide(driverSlide + 1);
  };

  return (
    <>
      <SlidePrevBtn
        onClick={prevBtnFunc}
        stationSlide={stationSlide}
        driverSlide={driverSlide}
      >
        <IoIosArrowBack size={23} />
      </SlidePrevBtn>
      <SlideNextBtn onClick={nextBtnFunc}>
        <IoIosArrowForward size={23} />
      </SlideNextBtn>
    </>
  );
};

const SlidePrevBtn = styled.button.attrs({
  type: 'button',
  alt: '슬라이더 이전 버튼',
})`
  ${({ theme }) => theme.flexBox('center')};
  position: absolute;
  left: 1%;
  top: 50%;
  width: 40px;
  transform: translate(-50%, 50%);
  padding: 8px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
  cursor: ${props =>
    props.stationSlide === 0 || props.driverSlide === 0
      ? 'disabled'
      : 'pointer'};
  pointer-events: ${props =>
    props.stationSlide === 0 || props.driverSlide === 0 ? 'none' : 'auto'};
  opacity: ${props =>
    props.stationSlide === 0 || props.driverSlide === 0 ? 0 : 1};
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 5%), 0 3px 5px 0 rgb(0 0 0 / 10%);
  transition: opacity 500ms ease-in-out;

  &:hover {
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 35%), 0 8px 12px 0 rgb(0 0 0 / 20%);
    transition: opactiy 500ms ease-in-out;
  }
`;

const SlideNextBtn = styled(SlidePrevBtn).attrs({
  alt: '슬라이더 다음 버튼',
})`
  left: 100%;
  cursor: pointer;
  opacity: 1;
  transform: translate(-80%, 50%);
`;
export default memo(SliderBtn);
