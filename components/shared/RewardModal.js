import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import animatedStar from '../../public/star_animated.gif'

const RewardModal = ({levelUpImage = animatedStar, showModal = true }) => {
const [show, setShow] = useState(showModal)
if (!show) {
    return null;
}
 return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  style={{boxShadow: "inset 0 0 0 2000px rgba(255, 255, 255, 0.1)"}} id="modal-id">
    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
 <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
   <div className="">
     <div className="text-center p-5 flex-auto justify-center">
     <Image
            src={levelUpImage}
            alt={levelUpImage}
        />
        <h2 className="text-xl font-bold py-4 ">Well done!</h2>
        <p className="text-sm text-gray-500 px-8">You're on your way to levelling up. Keep up the good work.</p>    
     </div>
  
     <div className="p-3  mt-2 text-center space-x-4 md:block">
     <Link href="/profile/">
         <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
             Go to profile
         </button>
    </Link>
         <button onClick={() => {setShow(false)}} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Continue</button>
         {/* <button onClick={() => {confetti();}} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Continue</button> */}
     </div>
   </div>
 </div>
</div>
  )
}

export default RewardModal