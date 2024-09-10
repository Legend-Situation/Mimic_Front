import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/auth');
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / ionicons / outline / exit-outline">
        <g id="Vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.26884 4.51884C2.76113 4.02656 3.42881 3.75 4.125 3.75H13.125C13.8212 3.75 14.4889 4.02656 14.9812 4.51884C15.4734 5.01113 15.75 5.67881 15.75 6.375V8.25C15.75 8.66421 15.4142 9 15 9C14.5858 9 14.25 8.66421 14.25 8.25V6.375C14.25 6.07663 14.1315 5.79048 13.9205 5.5795C13.7095 5.36853 13.4234 5.25 13.125 5.25H4.125C3.82663 5.25 3.54048 5.36853 3.3295 5.5795C3.11853 5.79048 3 6.07663 3 6.375V17.625C3 17.9234 3.11853 18.2095 3.3295 18.4205C3.54048 18.6315 3.82663 18.75 4.125 18.75H13.125C13.4234 18.75 13.7095 18.6315 13.9205 18.4205C14.1315 18.2095 14.25 17.9234 14.25 17.625V15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75V17.625C15.75 18.3212 15.4734 18.9889 14.9812 19.4812C14.4889 19.9734 13.8212 20.25 13.125 20.25H4.125C3.42881 20.25 2.76113 19.9734 2.26884 19.4812C1.77656 18.9889 1.5 18.3212 1.5 17.625V6.375C1.5 5.67881 1.77656 5.01113 2.26884 4.51884Z"
            fill="#1E293B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4697 7.71967C17.7626 7.42678 18.2374 7.42678 18.5303 7.71967L22.2803 11.4697C22.5732 11.7626 22.5732 12.2374 22.2803 12.5303L18.5303 16.2803C18.2374 16.5732 17.7626 16.5732 17.4697 16.2803C17.1768 15.9874 17.1768 15.5126 17.4697 15.2197L20.6893 12L17.4697 8.78033C17.1768 8.48744 17.1768 8.01256 17.4697 7.71967Z"
            fill="#1E293B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.20312 12C8.20312 11.5858 8.53891 11.25 8.95312 11.25H21.75C22.1642 11.25 22.5 11.5858 22.5 12C22.5 12.4142 22.1642 12.75 21.75 12.75H8.95312C8.53891 12.75 8.20312 12.4142 8.20312 12Z"
            fill="#1E293B"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logout;
