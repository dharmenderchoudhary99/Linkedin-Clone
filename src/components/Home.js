import styled from "styled-components";
import Leftside from "./LeftSide";
import Rightside from "./RightSide";
import Main from "./Main";


const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          {" "}
          <a>Hiring in Hurry? - </a>
        </h5>
        <p> Find Talented pros in record time</p>
      </Section>
      <LayOut>
        <Leftside/>
        <Main/>
        <Rightside/>
      </LayOut>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const LayOut = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }


`;

export default Home;
