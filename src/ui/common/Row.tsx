type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  height?: string | number;
  //   justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch";
  //   alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  //   flexBasis?: number | string;
  //   gap?: number;
  //   flexGrow?: number;
  //   border?: boolean;
  style?: React.CSSProperties;
};

export default function Row(props: Props) {
  return <div {...props}>{props.children}</div>;
}
