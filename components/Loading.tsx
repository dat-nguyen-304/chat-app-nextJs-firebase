import styled from "styled-components";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import CircularProgrogress from "@mui/material/CircularProgress";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const Loading = () => {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <Image src={Logo} alt="logo" height="200" width="200" />
      </StyledImageWrapper>
      <CircularProgrogress />
    </StyledContainer>
  );
};

export default Loading;
