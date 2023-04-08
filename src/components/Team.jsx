import React from 'react'
import Founderimage from '../images/founder1.jpg'
const Team = () => {
  return (
    <section className='bg-gradient-to-b from-[#000120] to-[#220056] ' id='team'>
  <div className="py-8 sm:py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        
      <h1 className="bigHeading pt-4 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Our Founder{" "}
              </span>
            </h1>
          
      </div> 
      <div className=" grid grid-cols-1 gap-8 mb-6 lg:mb-16 md:grid-cols-1">
          <div className="items-center bg-[#16081c] rounded-lg shadow sm:flex">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Founderimage} alt="Bonnie Avatar" />
              </a>
              <div className="md:w-2/3 sm:w-full p-5">
                  <h3 className="smallHeading tracking-wider text-xl font-bold tracking-tight text-white">
                      <a href="#">Aftab Shaikh</a>
                  </h3>
                  
                  <p className="mt-3 mb-4 font-light text-gray-400">HAAWKS's founder, Mr. Aftab Shaikh, is a trailblazer in the world of digital innovation. His leadership has been instrumental in guiding our venture through development and growth.One of his key traits is the ability to create an interoperability mindset among team members and collaborate with other companies in an effort to foster mutual success.His ability to be adaptive and keep up with the ever changing web3 industry ensures that our platform will always be on the cutting edge of technology.Furthermore, Mr. Aftab is always up for learning given the fast-paced nature of today’s web3 industry; he embraces all new challenges that come along with this ecosystem and never stops striving for excellence.</p>
              </div>
          </div> 
      </div>

  </div>
</section>
  )
}

export default Team