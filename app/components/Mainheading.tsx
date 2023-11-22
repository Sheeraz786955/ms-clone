import Button from "./Button"
import Image from "next/image"
export default function Mainheading(){
    return <div className="main">
        <div className="slidbar flex flex-col-reverse md:flex-row mx-2">
        <div className="left flex flex-col justify-center item-center md:items-baseline ">
          <h1 className='text-2xl md:text-4xl font-medium md:mx-5 mx-8'>Maximise the everyday with Microsoft 365</h1>
          <p className='w-80 mx-5 md:w-96'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
          <div className="flex-col-reverse md:flex-row ">
            <div><Button/></div>
            <div><span className=' cursor-pointer mx-6 hover:underline'> For up to six people{"->"} </span></div>
          </div>
        </div>
        <div className="right">
          <Image className='md:w-[60rem]' src="/microsoft.jpeg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
}