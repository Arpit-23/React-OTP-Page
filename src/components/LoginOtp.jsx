import React, { useState } from 'react'
import OtpInput from './OtpInput'
const loginOtp = () => {
    const [submitcolor, setSubmitColor] = useState(false);
    function submitHandler(c){
        console.log("submited - ")
        setSubmitColor(true);
    }
  return (
    <div className='flex flex-col p-6 items-center bg-blue-300 w-full h-screen gap-y-[60px]'>
        <p className=' font-bold text-white text-6xl'>OTP PAGE</p>
        <div className='flex flex-col bg-white p-6 text-center w-[400px] gap-y-[15px] border rounded-md'>
            <div className='text-black font-bold text-2xl'>Mobile Phone Verification</div>
            <div className=' text-gray-300'>Enter the 4-digit Verification code that was sent to your phone number.</div>
            <div className='w-[200px] mx-auto '>
                    <OtpInput lenght={4} submitHandler={submitHandler}  setSubmitColor={setSubmitColor}/>
            </div>
            <div>
                <button className={`${submitcolor ? " bg-green-500" : " bg-blue-950"} w-[200px] border rounded-md text-white py-2`}>Verify Account</button>
            </div>
            <div className=' text-gray-300'>
                Didn't receive code?<span className="text-blue-950" >Resend</span>
            </div>
        </div>
    </div>

  )
}

export default loginOtp