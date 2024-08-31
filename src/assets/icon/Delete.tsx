import React from 'react';

const Delete = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 39 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_398_3603)">
        <rect x="10.5" y="8" width="18" height="18" rx="9" fill="white" />
        <path
          d="M15.5 17H23.5"
          stroke="#1F1E23"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_398_3603"
          x="0.5"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.38029 0 0 0 0 0.38029 0 0 0 0 0.38029 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_398_3603"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_398_3603"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Delete;
