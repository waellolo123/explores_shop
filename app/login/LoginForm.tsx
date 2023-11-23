"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";


const LoginForm = () => {

 const [isLoading, setIsLoading] = useState(false);
 const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
  defaultValues: {
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
     <Heading title="Log in to your account"/>
     <Button outline label="Continue with Google" icon={AiOutlineGoogle} onclick={() => {}}/>
     <hr className="bg-slate-300 w-full h-px" />
     <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
     <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required/>
     <Button label={isLoading ? "Loading" : "Login"} onclick={handleSubmit(onSubmit)}/>
     <p className="text-slate-500">dont have an account? <Link href={"/register"} className="underline">register</Link></p>
    </>
  )
}

export default LoginForm


