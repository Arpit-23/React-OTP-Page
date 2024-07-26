import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({lenght=4,submitHandler =()=>{},setSubmitColor}) => {
    const [otp, setOtp] = useState(new Array(lenght).fill(""));
    const inputRefs = useRef([]);

    useEffect(()=>{
        // console.log(inputRefs.current)
        if(inputRefs.current[0])
            inputRefs.current[0].focus();
    },[]);

    const handleChange = (index, e) =>{
        const value = e.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = "  ";
        newOtp[index] = value.substring(value.length-1);
        console.log(newOtp[index])
        setOtp(newOtp);

        //submit trigger
        const combineOtp = newOtp.join("");
        if(combineOtp.length === lenght) submitHandler(combineOtp);
        else setSubmitColor(false);

        //Move to next input if current field is filled
        if(value && index < lenght-1 && inputRefs.current[index+1])
            inputRefs.current[index+1].focus();
    }

    const handleClick = (index) =>{
        inputRefs.current[index].setSelectionRange(1,1);

        //check that it previos otp box filled or not
        if(index>0 )
            inputRefs.current[otp.indexOf("")].focus();
        console.log(otp.indexOf(""))

        if(index<length-1)
            inputRefs.current[otp.indexOf("")].focus();
    }


    const handleKeyDown = (index, e) =>{
        if(
            e.key === "Backspace" &&
            !otp[index] &&
            index >0 &&
            inputRefs.current[index -1]
        ){
            inputRefs.current[index-1].focus();
        }
    }

  return (
    <div className='flex flex-row justify-between'>
        {
            otp.map((value, index) =>{
                {/* console.log(value, index); */}
                return (
                    <input
                    key={index}
                    value={value}
                    type='text'
                    ref={(input) =>{ 
                        // console.log(input) 
                        return (inputRefs.current[index] = input)} 
                        }
                    className=' bg-gray-300 w-[20%] h-11 border rounded-md text-black text-center'
                    onChange={(e) => handleChange(index,e)}
                    onClick={()=>handleClick(index)}
                    onKeyDown={(e) =>handleKeyDown(index,e)}
                    />
                )
            })
        }
    </div>
  )
}

export default OtpInput