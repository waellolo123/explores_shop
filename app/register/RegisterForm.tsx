"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { register } from "module";

const RegisterForm = () => {
 const [isLoading, setIsLoading] = useState(false)

  return (
    <>
     <Heading title="Sign up to be Explores runner"/>
     <hr className="bg-slate-300 w-full h-px" />
     <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
    </>
  )
}

export default RegisterForm