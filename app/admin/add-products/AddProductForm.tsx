"use client";

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckbox from "@/app/components/inputs/CustomCheckbox";
import Input from "@/app/components/inputs/Input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const AddProductForm = () => {

 const [isLoading, setIsLoading] = useState(false);
 const [images, setImages] = useState<ImageType[] | null>();
 const [isProductCreated, setIsProductCreated] = useState(false);
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

 useEffect(()=>{
  setCustomValue('images', images)
 },[images])

 const category = watch('category');
 const setConstantValue = (id: string, value: any) => {
  setValue(id, value, {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
  });
 }

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
       {categories.map((item)=>{
        if(item.label === 'All'){
          return null;
        }
        return <div key={item.label} className="col-span">
          <CategoryInput 
          onclick={(category)=>setCustomValue('category', category)} 
          selected={category === item.label}
          label={item.label}
          icon={item.icon}
          />
        </div>
       })}
      </div>
     </div>
     <div className="w-full flex flex-col flex-wrap gap-4">
      <div className="">
        <div className="font-bold">Select the available product sizes and upload their images.</div>
        <div className="text-sm">You must upload an image for each of the size selected otherwise your color selection will be ignored.</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {colors.map((item, index)=>{
          return (<SelectColor key={index} item={item} addImageToState={()=>{}} removeImageFromState={()=>{}} isProductCreated={false} />)
        })}
      </div>
     </div>
    </>
  )
}

export default AddProductForm



