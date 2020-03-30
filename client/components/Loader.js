import styled from "styled-components";

const Loader = props => (
  <LoaderContainer {...props}>
    <LoaderIcon width="100px" height="100px" viewBox="-3 -4 39 39">
      <polygon
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="1"
        points="16,0 32,32 0,32"
      />
    </LoaderIcon>
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  position: ${({ position }) => position || "fixed"};
  top: 0;
  left: 0;
  display: ${p => p.display};
  opacity: ${p => p.opacity};
  transition: opacity ${p => p.time}s;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const LoaderIcon = styled.svg`
  width: 20ppx;
  height: 200px;
  stroke-dasharray: 17;
  animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  @keyframes dash {
    to {
      stroke-dashoffset: 136;
    }
  }
`;

export default Loader;
