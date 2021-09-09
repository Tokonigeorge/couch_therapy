import React from "react";

const Loadingpage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg
        width="84"
        height="56"
        viewBox="0 0 84 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 16.5781H84V46.866H0V16.5781Z" fill="#1D1E1E" />
        <path
          d="M6.58475 55.269C11.3453 51.0502 13.8585 48.8209 12.6356 46.6326H19.2203C14.7414 51.9295 11.9057 53.5284 6.58475 55.269Z"
          fill="#1D1E1E"
        />
        <path d="M10.27 0H71.379V34.2569H10.27V0Z" fill="white" />
        <path
          d="M73.7293 55.2696C64.2893 49.0267 57.7616 45.3522 57.4605 34.2569H66.4914C64.3433 40.8836 67.7167 45.8983 73.7293 55.2696Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Loadingpage;
