import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";
function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">
              One Card for all your payments.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              obcaecati veritatis pariatur, autem architecto voluptas vero id
              eius.
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .card-right {
    display: flex;
    justify-content: flex-end;
  }
  .card-left {
  }
`;
export default CardSection;
