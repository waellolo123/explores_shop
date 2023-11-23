"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";


const RegisterForm = () => {

 const [isLoading, setIsLoading] = useState(false);
 const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
  defaultValues: {
    name: "",
   email: "",
   password: ""
  }
 });

 const onSubmit:SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true);
  console.log(data);
 }

  return (
    <>
     <Heading title="Sign up to be Explores member"/>
     <hr className="bg-slate-300 w-full h-px" />
     <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
     <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
     <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required/>
     <Button label={isLoading ? "Loading" : "Sign Up"} onclick={handleSubmit(onSubmit)}/>
    </>
  )
}

export default RegisterForm

// register={register} errors={errors}