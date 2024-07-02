import Logo from "./Logo";

type Props = {};
const classes = ["flex-row", "flex"].join(" ");
function Header() {
  return (
    <div className={classes}>
      <Logo />
      <div className="bg-purple flex-auto">네비게이터</div>
    </div>
  );
}

export default Header;
