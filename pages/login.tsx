import Head from "next/head";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";

const Login = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);

  return (
    <StyledContainer>
      <Head>
        <title>Login</title>
      </Head>
      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image src={Logo} alt="Chat app logo" height="200" width="200" />
        </StyledImageWrapper>
        <Button variant="outlined" onClick={() => signInWithGoogle()}>
          Sign in with google
        </Button>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;

export default Login;
