import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingStyle>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoadingStyle>
  );
}

const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
