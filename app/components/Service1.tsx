import Image from "next/image"
export default function Service1(){
     return <div className="main">
        
      <div className="center-container md:flex w-full ">
        <div className="left mt-14 md:ml-8 m-2 md:w-1/4"><Image  src="/windows.jpeg" alt="" width={500}  height={500}/>
          <h1 className="text-2xl font-medium my-4 w-72 cursor-pointer">Designed for life today – and tomorrow</h1>
          <p className='md:w-3/4 w-96 cursor-pointer '>The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love. </p>
          <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>see if your pc is ready{'>'}</span></div>
        </div>
        <div className="mid1 mt-14 md:ml-8 m-2 md:w-1/4"><Image src="/edge.webp" alt="" width={500} height={500}/>
          <h1 className="text-2xl font-medium my-4 cursor-pointer">Microsoft Edge</h1>
          <p className='md:w-3/4 w-96 cursor-pointer'>World-class performance with more privacy, more productivity and more value while you browse. </p>
          <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Download Now{'>'}</span></div>
        </div>
        <div className="mid2 mt-14 md:ml-8 m-2 cursor-pointer md:w-1/4"><Image src="/onedrive.webp" alt="" width={500}height={500} />
          <h1 className="text-2xl font-medium my-4 cursor-pointer">Microsoft OneDrive</h1>
          <p className='md:w-3/4 w-96 cursor-pointer'>Save your files and photos to OneDrive and access them from any device, anywhere. </p>
          <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Learn more{'>'}</span></div>
        </div>
        <div className="right mt-14 md:ml-8 m-2 md:mr-10 cursor-pointer md:w-1/4"><Image src="/note.webp" alt="" width={500} height={500} />
          <h1 className="text-2xl font-medium my-4 cursor-pointer">One Note</h1>
          <p className='md:w-3/4 w-96 cursor-pointer'>Organise your notes and your life. </p>
          <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Learn more{'>'}</span></div>
        </div>

      </div>
     </div>
}