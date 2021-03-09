import styled from "styled-components";
import { lighten } from "polished";

export const FormAlertElement = styled.div`
  background-color: ${lighten(0.3, '#eb4034')};
  padding: 1rem;
  display: flex;
  align-items: center;

  svg {
    display: block;
    width: 4rem;
    height: 4rem;
    fill: #eb4034;
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;

export const FormAlertText = styled.span`
  font-size: 16px;
  color: #eb4034;
`;
