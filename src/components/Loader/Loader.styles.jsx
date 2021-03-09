import styled, { keyframes } from "styled-components";

const spinnerFade = keyframes`
    0% { background-color: #000; }
    
    100% { background-color: transparent; }
`;

const generateStylesForBlades = (amount) => {
  let styles = ``;

  let initialDelay = 0;
  let initialRotate = 0;

  for (let i = 1; i < amount + 1; i++) {
    styles += `
        &:nth-child(${i}) {
            animation-delay: ${initialDelay}s;
            transform: rotate(${initialRotate}deg);
          }
        `;

    initialDelay += 0.083;
    initialRotate += 30;
  }

  return styles;
};

export const SpinnerElement = styled.div`
  font-size: ${({ size }) => size};
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const SpinnerBlade = styled.div`
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em;
  border-radius: 0.0555em;
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: ${spinnerFade} 1s infinite linear;

  ${generateStylesForBlades(12)}
`;
