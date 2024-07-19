import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  width?: number;
  gap?: number;
  //   justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch";
  //   alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  //   flexBasis?: number | string;
  //   flexGrow?: number;
  //   border?: boolean;
  style?: React.CSSProperties;
};

export default function Col(props: Props) {
  return <ColStyle style={props.style}>{props.children}</ColStyle>;
}

const ColStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};
`;
