import React from "react";

export default function Arrow({show, id}) {
  return (
    <svg
      className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc`} 
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowForwardIosIcon"
      width='18px'
      height='18px'
      stroke="#fff"
      fill="#fff"
      style= {{transform : show == id && 'rotate(90deg)'}}
    >
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
}
    