import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <LoaderText>loading</LoaderText>
        <Load></Load>
      </Loader>
    </LoaderWrapper>
  );
};

const text = keyframes`
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
`;

const loading = keyframes`
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
`;

const loading2 = keyframes`
  0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Viewport height */
  width: 100vw; /* Viewport width */
`;

const Loader = styled.div`
  width: 80px;
  height: 50px;
  position: relative;
`;

const LoaderText = styled.span`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: #c8b6ff;
  animation: ${text} 3.5s ease both infinite;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;

const Load = styled.span`
  background-color: #9a79ff;
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translate(64px);
  animation: ${loading} 3.5s ease both infinite;
  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #d1c2ff;
    border-radius: inherit;
    animation: ${loading2} 3.5s ease both infinite;
  }
`;

export default Loading;
