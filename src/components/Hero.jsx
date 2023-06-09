import React from 'react'
const Hero = () => {
  return (
    <div ><div
    className="vheight overflow-hidden w-full h-screen bg-[url('/src/images/hero_backdrop1.png')] bg-cover bg-center flex justify-center items-center">
    <div className="hero flex flex-col justify-center items-center px-4 mt-16">
       <h1 className="heroHeading bigHeading text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold drop-shadow-lg">Make the decentralized web
        </h1><h1 className="heroHeading bigHeading text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold drop-shadow-lg">a reality for everyone.
        </h1> 
        <p className='text-white pt-4 mb-8 text-center lg:w-1/2' style={{display: "flex", justifyContent: "center"}}>We aim to establish a secure space that instills confidence in investing in digital assets. Our platform provides essential resources to users, regardless of their level of expertise in the crypto investment realm.</p>

        
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4'>
          <a className="text-center block sm:ml-0 px-6 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
            href="#">Connect Now</a>
            <a className=" text-center px-6 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
          target='_blank' href="https://drive.google.com/file/d/1li4WbmaF6u25MG6vvaS-t3v8F98yp6IG/view">Read Litepaper</a>
          </div>
        
    </div>
</div></div>
  )
}

export default Hero