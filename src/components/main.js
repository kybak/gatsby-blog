import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${props => props.narrow ? "800px" : "100%"}
  max-height: ${props => props.narrow ? "600px" : "100%"}
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignCenter ? "center" : props.alignEnd ? "flex-end" : "flex-start"};
`;

export const Code = styled.span`
  background: #e6e6e6;
  color: #ff2673;
  padding: 1px 5px;
  border-radius: 2px;
`;

export const Header = styled.span`
  font-size: ${props => props.huge ? "45px" : props.big ? "40px" : props.medium ? "32px" : props.small ? "25px" : "20px"};
  font-weight: bold;
`;

export const Divider = styled.div`
  width: ${props => props.big ? "100%" : props.medium ? "50%" : props.small ? "100px" : "100%"};
  height: 1px;
  background: #dedede;
  margin: 10px 0;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${props => props.bold ? "bold" : "normal"}
`;

export const Link = styled.a`
  color: #126dff;
`;