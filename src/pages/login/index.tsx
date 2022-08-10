import Image from "next/image";
import React from "react";
import logo from "../../assets/logo-branca.png";

import {
  Wrapper,
  Container,
  ImageContainer,
  ButtonsContainer,
  ButtonSignIn,
  ButtonSignUp,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src={logo} alt="Logo" />
        </ImageContainer>

        <ButtonsContainer>
          <ButtonSignIn>Entrar</ButtonSignIn>
          <ButtonSignUp>Criar conta</ButtonSignUp>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;
