import { getCurrentUser } from "@/actions/getCurrentUser"
import Container from "../components/Container"
import FormWrapp from "../components/FormWrapp"
import RegisterForm from "./RegisterForm"


const Register = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrapp>
        <RegisterForm currentUser={currentUser} />
      </FormWrapp>
    </Container>
  )
}

export default Register

