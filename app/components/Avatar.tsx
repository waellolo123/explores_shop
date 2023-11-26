import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";


interface AvatarProps{
  src?: string | null | undefined
}

const Avatar:React.FC<AvatarProps> = ({src}) => {

  if(src){
    return (
      <Image src={src} alt="avatar" className="rounded-full" height={40} width={40}/>
      )
  } 
    return <BsPersonCircle size={24}/>

}

export default Avatar


