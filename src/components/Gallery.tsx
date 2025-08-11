'use client'
import { motion } from "framer-motion";
import Image from "next/image";




export default function Gallery() {
  const initialImages = [
    "https://emkan-furniture.com/wp-content/uploads/2022/08/%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D9%85%D9%88%D8%AF%D8%B1%D9%86-1024x673.jpeg",
    "https://matsmall.com/wp-content/uploads/2023/08/Majlis-640x640.webp",
    "https://cdn.salla.sa/vWPYZ/26c03564-9f0a-443c-af5a-188b14adbe7c-1000x1000-fVLsp3v6y1CIUSNBJJItQaw76cHRhAfkR4KdJhbY.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaL7Duz5X7zkGICtx1qsDW2xwrs_xOejvBSQKhgLJTMWCJLrpagIByfZ0iq8LmZL7dpI&usqp=CAU",
    "https://beyooot.com/cdn/shop/files/DULIAM.jpg?v=1739798277&width=533",
    "https://cdn.salla.sa/OqAOWq/1fbd6271-4c83-46f2-add9-f05c9485c454-500x500-fhu3ka9bg7gOqNeqoyKdt92yuFLqu9eue0SLYvKi.png",
    "https://cdn.salla.sa/OZAme/e5c67475-5ec6-4773-955b-a5af585b59d2-500x500-WjEae9MElsRc6e1CzmywM1KHyNpgoGFNJjzPy2Wx.jpg",
    "https://cdn.salla.sa/OZAme/3ebb80b8-4576-4465-9ecb-969da37dd669-500x494.93769470405-51Wb17lbOUpw7HCQEgVBHk5dJSmNuPGzfVNB9G6Y.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_c-HK9SNyehs_FBA26DK7fYDGlkp_4SExysTG9TKnmtCuOlAbQFECiARqLvFdD3rT5U&usqp=CAU",
    "https://www.zrafh.com/cdn/shop/products/144041ddcdda1e261ff0fe6322a49521.jpg?v=1736072139&width=500",

  ];
  return (
    <section className="bg-white py-12 ">
      <div className="heading w-full flex flex-col items-center justify-center">
        <span className="font-[600] text-[1.3rem] text-gray3">Share your setup with</span>
        <h2 className="text-[2.5rem]  font-bold text-center">#FuniroFurniture</h2>
      </div>
      <div className=" w-full my-[1rem] flex flex-wrap items-center justify-center gap-3">
        {/* left */}
        <div className="left grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[35%] overflow-hidden">
          {initialImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4 "
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className=" object-cover w-full h-[200px]"
              />
            </motion.div>
          ))}



        </div>
        {/* middel */}
        <div className="center max-w-[35%]">
          {initialImages.slice(4, 5).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 5}`}
                width={300}
                height={200}
                className=" object-cover w-full h-[200px]"
              />
            </motion.div>
          ))}

          {/* Center Image */}
          )
        </div>
        <div className="right grid grid-cols-1 md:grid-cols-2 gap-4  max-w-[35%]">
          {initialImages.slice(5, 9).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4 "
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className=" object-cover w-full h-[200px]"
              />
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}