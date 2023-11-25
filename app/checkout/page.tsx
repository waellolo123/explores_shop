import Container from "../components/Container"
import FormWrapp from "../components/FormWrapp"
import CheckoutClient from "./CheckoutClient"


const Checkout = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrapp>
          <CheckoutClient />
        </FormWrapp>
      </Container>
    </div>
  )
}

export default Checkout