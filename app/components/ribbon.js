import React from 'react';
import styled from 'styled-components';

const RibbonStyled = styled.div`
  background: #2c2b73;
  display: inline-block;
  color: #f4f4f4;
  padding: 0.5em 0.7em;
  font-weight: 900;
  letter-spacing: 0.2em;
  position: relative;
  font-size: 1.5em;
  text-transform: uppercase;
  transform-style: preserve-3d;
  transform: rotate(0deg) skew(0deg, 0deg);

  &:before,
  &:after {
    content: "";
    width: 0;
    height: 2em;
    display: block;
    background: #2c2b73;
    position: absolute;
    border-style: solid;
    border-width: 0.5em;
    z-index: -1;
    transform: translateZ(-1em);
  }

  &:before {
    left: -0.5em;
    top: 0.5em;
    border-color: #2c2b73 #151b33 #2c2b73 #2c2b73;
  }

  &:after {
    right: -0.5em;
    top: -0.5em;
    border-color: #2c2b73 #2c2b73 #151b33 #2c2b73;
  }
`;

const Ribbon = ({ text }) => {
  return (
    <RibbonStyled>
      {text}
    </RibbonStyled>
  );
};

export default Ribbon;