import Image from 'next/image'
import Myicon from './components/MyIcon'

export default function Home() {
  return (
    <main >
     
      
      <div className="slidbar flex flex-col-reverse md:flex-row mx-2">
        <div className="left flex flex-col justify-center item-center md:items-baseline">
          <h1 className='text-2xl md:text-4xl font-medium mx-5'>Maximise the everyday with Microsoft 365</h1>
          <p className='w-80 mx-5 md:w-96'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
          <div className="flex-col-reverse md:flex-row ">
          <div><button className='text-white bg-blue-500 font-bold px-4 py-2 my-6 mx-6'>For one person</button></div>
          <div><span className=' cursor-pointer mx-6'> For up to six people{"->"} </span></div>
          </div>
        </div>
        <div className="right">
          <img className='md:w-[60rem]' src="microsoft.jpeg" alt="" />
        </div>
      </div>


      <div className="center-container md:flex">
        <div className="left mt-14 ml-8"><img className='w-96' src="windows.jpeg" alt="" />
        <h1 className="text-2xl font-medium my-4 w-72 cursor-pointer">Designed for life today – and tomorrow</h1>
        <p className='w-96 cursor-pointer '>The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>see if your pc is ready{'>'}</span></div>
        </div>
        <div className="mid1 mt-14 ml-8"><img className='w-96' src="edge.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">Microsoft Edge</h1>
        <p className='w-96 cursor-pointer'>World-class performance with more privacy, more productivity and more value while you browse. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Download Now{'>'}</span></div>
        </div>
        <div className="mid2 mt-14 ml-8 cursor-pointer"><img className='w-96' src="onedrive.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">Microsoft OneDrive</h1>
        <p className='w-96 cursor-pointer'>Save your files and photos to OneDrive and access them from any device, anywhere. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Learn more{'>'}</span></div>
        </div>
        <div className="right mt-14 ml-8 md:mr-10 cursor-pointer"><img className='w-96' src="note.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">One Note</h1>
        <p className='w-96 cursor-pointer'>Organise your notes and your life. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Learn more{'>'}</span></div>
        </div>

      </div>


      
      <div className="center flex flex-col-reverse bg-[#e6e6e6] md:flex-row mx-2 m-10 p-10 ">
        <div className="left flex flex-col bg-[#e6e6e6] justify-center item-center md:items-baseline">
          <h1 className='text-2xl md:text-4xl font-medium mt-24 mx-5 md:ml-28'>Outlook for iOS and Android</h1>
          <p className='w-80 mx-5 mt-4 md:w-96 md:mt-3'>Connect. Organise. Get things done.</p>
          <div className="flex-col-reverse md:flex-row ">
          <div><button className='text-white bg-blue-500 mx-5 md:mx-0 font-bold px-4 py-2 my-6 '>Download Now</button></div>
         
          </div>
        </div>
        <div className="right">
          <img className='md:w-[60rem]' src="mobile.jpeg" alt="" />
        </div>
      </div>


      <h1 className='text-4xl font-semibold mx-10'>For business</h1>
      <div className="center-container md:flex">
        <div className="left mt-14 ml-8"><img className='w-96' src="try.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 w-72 cursor-pointer">Try Microsoft 365 for free</h1>
        <p className='w-96 cursor-pointer '>Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Start your free trial{'>'}</span></div>
        </div>
        <div className="mid1 mt-14 ml-8"><img className='w-96' src="vs.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">Visual Studio 2022</h1>
        <p className='w-96 cursor-pointer'>Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Download Visual Studio 2022{'>'}</span></div>
        </div>
        <div className="mid2 mt-14 ml-8 cursor-pointer"><img className='w-96' src="welcom.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">Welcome to your Windows 365 Cloud PC</h1>
        <p className='w-96 cursor-pointer'>Securely stream your Windows experience from the Microsoft cloud to any device. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Get it ready{'>'}</span></div>
        </div>
        <div className="right mt-14 ml-8 md:mr-10 cursor-pointer"><img className='w-96' src="get.webp" alt="" />
        <h1 className="text-2xl font-medium my-4 cursor-pointer">Get Microsoft Teams for free</h1>
        <p className='w-96 cursor-pointer'>Online meetings, chat and shared cloud storage – all in one place. </p>
        <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Sign up for free trail{'>'}</span></div>
        </div>

      </div>


      <div className="footer mx-5 md:flex bg-[#f2f2f2] py-2 w-auto">
        <div className="left md:mx-16">
          <ul className='my-10 ml-4'>
            <li className='text-xl font-semibold my-2'>Microsoft store</li>
            <li className='mb-4 cursor-pointer hover:underline'>Account profile</li>
            <li className='mb-4 cursor-pointer hover:underline'>Download center</li>
            <li className='mb-4 cursor-pointer hover:underline'>Return</li>
            <li className='mb-4 cursor-pointer hover:underline'>Order Tracking</li>
          </ul>
        </div>
        <div className="mid1 md:mx-16"> 
        <ul className='my-10 ml-4'>
            <li className='text-xl font-semibold my-2'>Education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft in education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Devices for education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft teams for education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft 365 for education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Office education</li>
            <li className='mb-4 cursor-pointer hover:underline'>Education Training and development</li>
            <li className='mb-4 cursor-pointer hover:underline'>Deal for students</li>
            <li className='mb-4 cursor-pointer hover:underline'>Azure Students</li>
          </ul>
        </div>
        <div className="mid2 md:mx-16"> hove:under
        <ul className='my-10 ml-4'>
            <li className='text-xl font-semibold my-2'>Business</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft cloud</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft security</li>
            <li className='mb-4 cursor-pointer hover:underline'>Azure</li>
            <li className='mb-4 cursor-pointer hover:underline'>Dynamics 365</li> 
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft 365</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft Advertising</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft Teams</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft industry</li>
           
          </ul>
        </div>
        <div className="mid3 md:mx-16">
        <ul className='my-10 ml-4'>
            <li className='text-xl font-semibold my-2'>Developer & IT</li>
            <li className='mb-4 cursor-pointer hover:underline'>Developer center</li>
            <li className='mb-4 cursor-pointer'>Documentation</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft Learn</li>
            <li className='mb-4 cursor-pointer hover:underline'>Tech and Community</li>
            <li className='mb-4 cursor-pointer hover:underline'>Azure marketplace</li>
            <li className='mb-4 cursor-pointer hover:underline'>Azure</li>
            <li className='mb-4 cursor-pointer hover:underline'>Microsoft platform</li>
            <li className='mb-4 cursor-pointer hover:underline'>Visual Studio</li>
          </ul>
        </div>
        <div className="right md:mx-16 ">
        <ul className='my-10 ml-4'>
            <li className='text-xl font-semibold my-2'>Company</li>
            <li className='mb-4 cursor-pointer hover:underline'>Careers</li>
            <li className='mb-4 cursor-pointer'>About us</li>
            <li className='mb-4 cursor-pointer hover:underline'>News</li>
            <li className='mb-4 cursor-pointer hover:underline'>Privacy</li>
            <li className='mb-4 cursor-pointer hover:underline'>nvesters</li>
            <li className='mb-4 cursor-pointer hover:underline'>Download center</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
