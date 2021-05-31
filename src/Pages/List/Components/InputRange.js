import * as React from 'react';
import { Range } from 'react-range';
import FilterBox from './FilterBox';

function InputRange({ value, title, onChange, min, max, step }) {
  const handleChange = values => {
    onChange({ values });
  };

  return (
    <FilterBox title={title}>
      <Range
        step={step}
        min={min}
        max={max}
        values={value}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div {...props} style={{ ...renderTrackStyle }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} style={{ ...renderThumbStyle }} />
        )}
      />
    </FilterBox>
  );
}

export default InputRange;

/*
position: absolute;
    top: 0;
    left: 0;
    right: 0%;
    display: block;
    height: 4px;
    background-color: #51abf3;
    border-radius: 2px;
}

position: absolute;
    top: -10px;
    right: 0;
    z-index: 99 !important;
    display: block;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 100%;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
    -ms-touch-action: none;
    touch-action: none;
}
*/

const renderTrackStyle = {
  height: '4px',
  backgroundColor: '#51abf3',
  bordeRadius: '2px',
};

const renderThumbStyle = {
  height: '24px',
  width: '24px',
  backgroundColor: '#fff',
  border: '1px solid #ced4da',
  borderRadius: '100%',
  boxShadow: '0 1px 4px 0 rgb(0 0 0 / 20%)',
};
