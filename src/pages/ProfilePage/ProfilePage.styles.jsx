import styled from "styled-components";
import { HeadingPrimary } from "../../components/HeadingPrimary/HeadingPrimary.jsx";

export const ProfilePageElement = styled.div`
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ProfilePageWrapper = styled.div`
  flex: 1 1 auto;
  padding: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 500px) {
    padding: 1.5rem;
  }

  & > *:not(:last-child):not(.contacts-page__heading) {
    margin-bottom: 2rem;
  }
`;

export const ProfilePageBody = styled.main`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ProfilePageHeading = styled(HeadingPrimary)`
  text-align: center;
  margin-bottom: 2.5rem;
`;
