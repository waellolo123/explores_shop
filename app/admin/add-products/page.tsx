import Container from "@/app/components/Container"
import FormWrapp from "@/app/components/FormWrapp"
import AddProductForm from "./AddProductForm"
import { getCurrentUser } from "@/actions/getCurrentUser"
import NullData from "@/app/components/NullData"


const AddProducts = async () => {
 const currentUser = await getCurrentUser();
 if(!currentUser || currentUser.role !== 'ADMIN'){
  return <NullData title="Oops access denied!" />
 }

  return (
    <div className="p-8">
     <Container>
      <FormWrapp>
        <AddProductForm />
      </FormWrapp>
     </Container> 
    </div>
  )
}

export default AddProducts

