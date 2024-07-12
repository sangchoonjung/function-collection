type Props = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  width?: number;
  //   justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch";
  //   alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  //   flexBasis?: number | string;
  //   gap?: number;
  //   flexGrow?: number;
  //   border?: boolean;
  style?: React.CSSProperties;
};

export default function Col(props: Props) {
  const classeswwww = ["bg-purple", "flex-col", "flex"].join(" ");
  return (
    <div style={props.style} className={`cumstom-col ${classeswwww}`}>
      {props.children}
    </div>
  );
}
