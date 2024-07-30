import { useNavigate } from "react-router-dom";
import Row from "../common/Row";
import Logo from "./Logo";
import styled from "styled-components";
import Tooltip from "../common/Tooltip";
import { navbar } from "../../data/Dummy";

type Props = {};

function Header() {
  const navigate = useNavigate();

  const onClick = (path: string) => {
    navigate(path);
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
