import styled from "styled-components";

export const Container = styled.div`
  height: 95%;
  max-width: 28rem;
  margin: 0 auto;
  padding: 2.5% auto;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #216095;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 1rem;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
`;
export const ButtonSignIn = styled.button`
  width: 100%;
  background-color: #fff;
  color: #216095;
  border-radius: 0.8rem;
  height: 4rem;
  font-size: 1.6rem;
  display: block;
`;
export const ButtonSignUp = styled.button`
  width: 100%;
  color: #fff;
  border-radius: 0.8rem;
  border: 1px solid #fff;
  height: 4rem;
  font-size: 1.6rem;
  display: block;
  margin-top: 2.4rem;
`;
