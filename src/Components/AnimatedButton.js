import styled from "styled-components";
import blob1 from "../img/blob_top.svg";
import blob2 from "../img/blob_bottom.svg";

import arrow from "../img/arrow.svg";
function AnimatedButton({ name }) {
  return (
    <ButtonStyled>
      {name}
      <img src={arrow} alt="arrow" className="arrow" />
      <img src={blob1} alt="blob1" className="blob1" />
      <img src={blob2} alt="blob2 " className="blob2" />
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 1rem 2rem;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .arrow {
    padding-left: 0.9rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    color: var(--accent-pink);
    .arrow {
      padding-left: 1.4rem;
    }
    .blob1 {
      transform: translateX(-100px);
    }
    .blob2 {
      transform: translateX(140px);
    }
  }
  .blob1,
  .blob2 {
    transition: all 0.4s ease-in-out;
    position: absolute;
    pointer-events: none;
  }
  .blob1 {
    top: 0;
    right: 0;
  }
  .blob2 {
    bottom: 0;
    left: 0;
  }
`;

export default AnimatedButton;
