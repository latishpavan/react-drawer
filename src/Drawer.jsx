import React from "react";
import styled from "styled-components";

const BackDropDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${(props) => (!props.isOpen ? "none" : "block")};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
`;

const SliderDiv = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  right: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.2s ease-out;
`;

function BackDrop(props) {
  return <BackDropDiv {...props} onClick={() => props.setOpen(false)} />;
}

export function Drawer(props) {
  const { isOpen, children, setOpen } = props;

  return (
    <React.Fragment>
      <BackDrop isOpen={isOpen} setOpen={setOpen} />
      <SliderDiv isOpen={isOpen}>{children}</SliderDiv>
    </React.Fragment>
  );
}
