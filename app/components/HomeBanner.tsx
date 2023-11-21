import Image from "next/image"


const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-tr from-gray-500 to-gray-100 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"><span className="text-red-700">BigK</span> Running Products</h1>
          <p className="text-lg md:text-xl text-white mb-2 tracking-widest">Enjoy discounts on selected items</p>
          <p className="text-2xl md:text-5xl text-gray-700 font-bold">Get 50% OFF</p>
        </div>
        <div className="w-1/3 relative aspect-video flex items-center justify-center">
         <Image src={"/images/bigk.png"} width={800} height={800} alt="banner image" className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner