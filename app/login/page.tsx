import { getCurrentUser } from "@/actions/getCurrentUser"
import Container from "../components/Container"
import FormWrapp from "../components/FormWrapp"
import LoginForm from "./LoginForm"


const Login = async () => {
 const currentUser = await getCurrentUser();

  return (
    <Container>
     <FormWrapp>
      <LoginForm currentUser={currentUser} /> 
     </FormWrapp> 
    </Container>
  )
}

export default Login