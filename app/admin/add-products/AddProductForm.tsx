"use client";

import Heading from "@/app/components/Heading";
import CustomCheckbox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductForm = () => {
 const [isLoading, setIsLoading] = useState(false);
 const {register, handleSubmit, setValue, watch, reset, formState:{errors}} = useForm<FieldValues>({
  defaultValues: {
    name: '',
    description: '',
    brand: '',
    inStock: false,
    images: [],
    price: '',
  }, 
 })

  return (
    <>
     <Heading title="Add Product" />
     <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
     <Input id="price" label="Price" disabled={isLoading} type="number" register={register} errors={errors} required />
     <Input id="brand" label="Brand" disabled={isLoading} register={register} errors={errors} required />
     <TextArea id="description" label="Description" disabled={isLoading} register={register} errors={errors} required />
     <CustomCheckbox id="inStock" register={register} label="This product is in stock" />
     <div className="w-full font-medium">
      <div className="mb-2 font-semibold">Select a category</div>
      <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] overflow-y-auto">
       
      </div>
     </div>
    </>
  )
}

export default AddProductForm

