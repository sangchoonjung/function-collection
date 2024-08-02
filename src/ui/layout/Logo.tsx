import styled from "styled-components";

function Logo() {
  return (
    <LogoStyle>
      <LogoItem>innofree</LogoItem>
    </LogoStyle>
  );
}
const LogoStyle = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 100px; /* 로고 높이에 맞게 조정 */
  background-color: #f1f1f1; /* 배경색 선택 */
`;

const LogoItem = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  animation: move-left 4s ease-in-out infinite;

  @keyframes move-left {
    0% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }
`;
export default Logo;
