import styled from "styled-components";
import { Button } from "../Button/Button.jsx";

export const UserElement = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const UserAccount = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border: 1px solid #000;
  min-height: 4.84rem;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    flex-basis: auto;
    width: 100%;
  }
`;

export const UserLogoutBtn = styled(Button)`
  min-height: 4.84rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
