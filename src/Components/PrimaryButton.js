import styled from "styled-components";
function PrimaryButton({ name }) {
  return <ButtonStyled> {name} </ButtonStyled>;
}
const ButtonStyled = styled.button`
  background-color: var(--accent-pink);
  padding: 0.7rem 2rem;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export default PrimaryButton;
