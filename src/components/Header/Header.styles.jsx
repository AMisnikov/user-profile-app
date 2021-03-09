import styled from "styled-components";

export const HeaderElement = styled.header`
  background-color: #fff;
  box-shadow: 0px 0.4rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const HeaderColumn = styled.div`
  flex: 0 1 40rem;
  padding: 0 2rem;

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-basis: auto;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
