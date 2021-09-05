import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import lines from "../img/lines.svg";
import questions from "../questions";
import Question from "./Question";
function FAQSection() {
  return (
    <FAQStyled>
      <InnerLayout>
        <h3 className="small-heading">
          Frequently <span>asked questions</span>
        </h3>
        <p className="c-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugiat
          dignissimos obcaecati eaque. Laudantium ea a, voluptatem non laborum
          inventore consequuntur officiis .
        </p>
        <div className="lines">
          <img src={lines} alt="" />
        </div>
        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FAQStyled>
  );
}
const FAQStyled = styled.section`
  .c-para {
    width: 60%;
    margin: 0 auto;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 340%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
    }
  }
`;

export default FAQSection;
