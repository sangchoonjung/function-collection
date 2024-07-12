type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  height?: number | string;
  //   justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch";
  //   alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  //   flexBasis?: number | string;
  //   gap?: number;
  //   flexGrow?: number;
  //   border?: boolean;
  style?: React.CSSProperties;
};

export default function Row(props: Props) {
  const classeswwww = ["bg-green", "flex-row", "flex", "flex-auto"].join(" ");

  return (
    <div className={`${classeswwww}`} style={{ ...props.style }}>
      {props.children}
    </div>
  );
}
