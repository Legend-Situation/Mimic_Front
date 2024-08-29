import React from 'react';

interface OwnProps {
  color?: string;
  width?: string;
  height?: string;
}

const Plus = ({ color = "#1F1E23", width = "24", height = "24" }: OwnProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / ionicons / outline / add-outline">
        <g id="Vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.5C12.4142 4.5 12.75 4.83579 12.75 5.25V18.75C12.75 19.1642 12.4142 19.5 12 19.5C11.5858 19.5 11.25 19.1642 11.25 18.75V5.25C11.25 4.83579 11.5858 4.5 12 4.5Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.1642 12.75 18.75 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default Plus;