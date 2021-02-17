import {
  Wrapper,
  Card,
  Header,
  Avatar,
  Title,
  Name,
  Age,
  City,
  Stats,
  StatFigure,
  StatTitle,
} from "./style";

import ProfilePicture from "../../shared/images/image-victor.jpg";

const ProfileCard = () => {
  return (
    <Wrapper>
      <Card>
        <Header>
          <Avatar src={ProfilePicture} alt="" />

          <Title>
            <Name>Victor Crest</Name>
            <Age>26</Age>
          </Title>

          <City>London</City>
        </Header>

        <section>
          <Stats>
            <li>
              <StatFigure>80K</StatFigure>
              <StatTitle>Followers</StatTitle>
            </li>
            <li>
              <StatFigure>803K</StatFigure>
              <StatTitle>Likes</StatTitle>
            </li>
            <li>
              <StatFigure>1.4K</StatFigure>
              <StatTitle>Photos</StatTitle>
            </li>
          </Stats>
        </section>
      </Card>
    </Wrapper>
  );
};

export default ProfileCard;
