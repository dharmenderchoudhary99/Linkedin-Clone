import styled from "styled-components";

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there !</Link>
          </a>
          <a>
            <AddPhotoText>Add the Photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 28%);
`;

const UserInfo = styled.div``;
const CardBackground = styled.div``;
const Photo = styled.div``;
const Link = styled.div``;
const AddPhotoText = styled.div``;

export default LeftSide;