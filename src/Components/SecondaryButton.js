import styled from "styled-components";
import arrow from "../img/arrow.svg";

function SecondaryButton({ name }) {
  return (
    <SecondaryButtonStyled>
      {name}

      <img src={arrow} alt="arrow-img" />
    </SecondaryButtonStyled>
  );
}
const SecondaryButtonStyled = styled.button`
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

  img {
    padding-left: 0.9rem;
  }
`;
export default SecondaryButton;
