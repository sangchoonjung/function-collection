import { useNavigate, useNavigation } from "react-router-dom";
import Col from "../common/Col";
import Row from "../common/Row";
import Logo from "./Logo";
import styled from "styled-components";
import Tooltip from "../common/Tooltip";

type Props = {};
export const navbar = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Services", path: "/services" },
  { title: "Team", path: "/team" },
];
function Header() {
  const navigate = useNavigate();

  const onClick = (path: string) => {
    const a = navigate(path);
  };
  return (
    <Row style={{ height: "70px" }}>
      <Logo />
      <Row style={{ justifyContent: "space-between" }}>
        {navbar.map((item) => (
          <ListItemStyle key={item.path} onClick={() => onClick(item.path)}>
            {item.title}
          </ListItemStyle>
        ))}
      </Row>
      <Tooltip>www</Tooltip>
    </Row>
  );
}

const ListItemStyle = styled.div`
  background-color: purple;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
export default Header;
