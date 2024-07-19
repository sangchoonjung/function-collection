import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  height?: number | string;
  gap?: number;
  //   justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch";
  //   alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  //   flexBasis?: number | string;
  //   flexGrow?: number;
  //   border?: boolean;
  style?: React.CSSProperties;
};

export default function Row(props: Props) {
  return <RowStyle style={props.style}>{props.children}</RowStyle>;
}

const RowStyle = styled.div<Props>`
  display: flex;
  flex-direction: row;
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};
`;
