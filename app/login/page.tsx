import Container from "../components/Container"
import FormWrapp from "../components/FormWrapp"
import LoginForm from "./LoginForm"


const Login = () => {
  return (
    <Container>
     <FormWrapp>
      <LoginForm /> 
     </FormWrapp> 
    </Container>
  )
}

export default Login