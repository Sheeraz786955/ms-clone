import Image from 'next/image'
import Myicon from './components/MyIcon'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Button from './components/Button'
import Button2 from './components/Button2'
export default function Home() {
  return (
    <main >
      
      <div className="slidbar flex flex-col-reverse md:flex-row mx-2">
        <div className="left flex flex-col justify-center item-center md:items-baseline">
          <h1 className='text-2xl md:text-4xl font-medium mx-5'>Maximise the everyday with Microsoft 365</h1>
          <p className='w-80 mx-5 md:w-96'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
          <div className="flex-col-reverse md:flex-row ">
            <div><Button/></div>
            <div><span className=' cursor-pointer mx-6 hover:underline'> For up to six people{"->"} </span></div>
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
            <div><Button2/></div>

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
      <Footer/>
    </main>
  )
}
