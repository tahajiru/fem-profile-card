import styled from "styled-components";
import { colors, radius, space, fontWeights } from "../../shared/variable";
import bgTop from "../../shared/images/bg-pattern-top.svg";
import bgBottom from "../../shared/images/bg-pattern-bottom.svg";
import CardDesign from "../../shared/images/bg-pattern-card.svg";

export const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BrandPrimary};
  padding: 1rem;
  z-index: -1;
  overflow: hidden;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  ::before {
    top: 0;
    left: 0;
    background: url(${bgTop}) no-repeat bottom right;
  }

  ::after {
    top: 100%;
    left: 100%;
    background: url(${bgBottom}) no-repeat top left;
  }
`;

export const Card = styled.article`
  flex-grow: 1;
  background-color: white;
  position: relative;
  max-width: 22.5rem;
  border-radius: ${radius};
  box-shadow: 0 4rem 4rem -2rem rgba(0, 0, 0, 0.2);
  margin: 0 ${space.large};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8.75rem;
  color: ${colors.BrandTertiary};

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${CardDesign});
    width: 100%;
    height: 8.75rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-top-left-radius: ${radius};
    border-top-right-radius: ${radius};
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: -50px;
  border: 5px solid white;
  z-index: 1;
  margin-bottom: ${space.large};
`;

export const Title = styled.div`
  margin-bottom: ${space.small};
`;

export const Name = styled.h2`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: ${fontWeights.Bold};
  color: ${colors.BrandSecondary};
  margin-right: ${space.small};
`;

export const Age = styled.p`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: ${fontWeights.Normal};
`;

export const City = styled.p`
  font-size: 0.875rem;
  margin-bottom: ${space.large};
`;

export const Stats = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: ${space.large} ${space.medium};

  li {
    list-style: none;

    ::before {
      content: "\\200B";
      height: 0;
      display: block;
    }
  }

  ::before {
    content: "";
    background: ${colors.Neutral};
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }
`;

export const StatFigure = styled.div`
  font-size: 1.125rem;
  font-weight: ${fontWeights.Bold};
  color: ${colors.BrandSecondary};
  margin-bottom: ${space.tiny};
`;

export const StatTitle = styled.div`
  font-size: 0.75rem;
  letter-spacing: 1px;
`;
