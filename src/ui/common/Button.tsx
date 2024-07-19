import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  baseColor?: "red" | "blue" | "green";
  onClick?: () => void;
};
export default function Button(props: Props) {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
}

const ButtonStyle = styled.button<Props>`
  color: black;
  background-color: ${(props) => props.baseColor || ""};
  border: 1px solid ${(props) => props.baseColor || ""};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.baseColor + "-dark" || ""};
  }
`;
