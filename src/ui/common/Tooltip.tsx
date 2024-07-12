import { useState } from "react";
import { RxInfoCircled } from "react-icons/rx";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}

export default function Tooltip({ children }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState<"topleft" | "topright" | "bottomleft" | "bottomright">("topleft");

  const handleMouseEnter = (event: React.MouseEvent<SVGElement>) => {
    const screenX = window?.innerWidth ?? 0;
    const screenY = window?.innerHeight ?? 0;
    const boxX = event.clientX;
    const boxY = event.clientY;

    //스크린기준 화면분할
    if (boxX < screenX * 0.6 && boxY < screenY * 0.6) {
      setPosition("topleft");
    }

    if (boxX > screenX * 0.6 && boxY < screenY * 0.6) {
      setPosition("topright");
    }

    if (boxX < screenX * 0.6 && boxY > screenY * 0.6) {
      setPosition("bottomleft");
    }

    if (boxX > screenX * 0.6 && boxY > screenY * 0.6) {
      setPosition("bottomright");
    }

    setShowTooltip(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<SVGElement>) => {
    setShowTooltip(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <RxInfoCircled
        style={{
          cursor: "pointer",
          color: "var(--color-title)",
        }}
        size={20}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <TooltipStyle data-position={position} showTooltip={showTooltip}>
        {children}
      </TooltipStyle>
    </div>
  );
}

interface TooltipStyleProps {
  showTooltip: boolean;
}
const TooltipStyle = styled.div<TooltipStyleProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  visibility: ${(props) => (props.showTooltip ? "visible" : "hidden")};
  background-color: white;
  border: var(--color-brand) 1px solid;
  color: black;
  border-radius: 5px;
  padding: 5px;
  z-index: var(--z-popover);
  width: max-content;
  height: fit-content;
  min-width: 200px;
  max-width: 40dvw;
  max-height: 40dvw;
  overflow: hidden;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.showTooltip ? 1 : 0)};
  &[data-position="topleft"] {
    top: calc(100% + 5px);
    left: 0;
  }
  &[data-position="topright"] {
    top: calc(100% + 5px);
    right: 0;
  }
  &[data-position="bottomleft"] {
    bottom: calc(100% + 5px);
    left: 0;
  }
  &[data-position="bottomright"] {
    bottom: calc(100% + 5px);
    right: 0;
  }
`;
