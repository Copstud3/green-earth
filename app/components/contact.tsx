import Image from 'next/image';
import React from 'react'


const pageLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "#about" },
    { name: "Features", link: "#contact" },
    { name: "Purchase", link: "#pricing" },
    { name: "Contact Us", link: "#contact" },
  ];

const Contact = () => {
  return (
    <section className='bg-[#547144] xl:px-[300px] py-10 font-geist'>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:items-start max-sm:pl-5 max-sm:gap-5'>
        <div>
            <p className='font-geist font-bold text-white text-[30px]'>Contact Us</p>
            <p className='text-white/66  text-[18px]'>Send us a message</p>
            <form className='flex flex-col justify-center gap-5 mt-5'>
                <input type="text" name='full-name' placeholder='Full Name' className='bg-yellow w-[250px] pl-2  text-black placeholder-[#232323] text-[14px] py-1 rounded-sm' />
                <input type="email" name='email' placeholder='Your email'className='bg-yellow w-[250px] pl-2  text-black placeholder-[#232323] text-[14px] py-1 rounded-sm' />
                <textarea name="message" placeholder="Your message" cols={3}  className='bg-yellow w-[250px] pl-2  text-black placeholder-[#232323] text-[14px] py-1 resize-none rounded-sm'/>
                <input type="button" value="Submit" className='xl:cursor-pointer w-fit mt-5 bg-[#75885E] px-8 py-2 rounded-md text-white  text-[13px]' />
            </form>
        </div>


        <div>
        <p className=' font-bold text-white text-[30px]'>Sitemap</p>
        <p className='text-white/66  text-[18px]'>All our pages</p>
            <div className='mt-5'>
                {pageLinks.map((link, index)=>(
                    <ul>      
                        <li key={index} className='t'>
                            <a href={link.link} className=' text-white text-[18px]'>- {link.name}</a>
                        </li>
                    </ul>
                ))}
            </div>
        </div>

        <div>
            <Image src="/green-earth-logo2.png" alt="Logo" width={200} height={200} className="" />
            <div className='flex gap-5'>
                <Image src="/phone.png" alt='phone' width={20} height={20} className='w-[25px] h-[25px]' />
                <p className='text-white/66  text-[18px]'>(08) 400 2000</p>
            </div>
            <div className='flex items-center gap-5 mt-3 '>
                <Image src="/mail.png" alt='phone' width={30} height={21} className='w-[25px] h-[20px]'  />
                <p className='text-white/66  text-[18px] max-sm:w-screen'>greenearthlandscaping@gmail.com</p>
            </div>
        </div>
        </div>
        <p className='text-white max-sm:w-screen  text-center mt-8 xl:mt-3 max-sm:text-[14px]'>Design by <a href="https://x.com/AmenaiSabuwala" target='_blank' className='text-yellow'>Amenai Sabuwala</a>. Development by <a href="https://x.com/copstud3" target='_blank' className='text-yellow'>Chris</a></p>
    </section>
  )
}

export default Contact
