import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 40px;
  border: 1px solid black;
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`;

const Input = styled.input`
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  border: none;
  margin: 10px;
  padding: 15px 20px;
  background-color: teal;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username/email" />
          <Input placeholder="password" />
        </Form>
          <Button>LOGIN</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;