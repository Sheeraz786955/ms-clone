import Image from "next/image"
export default function Service2() {
    return <div className="main">
        <div className="center-container md:flex">
            <div className="left mt-14 md:ml-8 m-2 md:w-1/4 cursor-pointer"><Image src="/try.webp" alt="" width={500} height={500} />
                <h1 className="text-2xl font-medium my-4 w-72 cursor-pointer">Try Microsoft 365 for free</h1>
                <p className='md:w-3/4 w-96 cursor-pointer '>Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial. </p>
                <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Start your free trial{'>'}</span></div>
            </div>
            <div className="mid1 mt-14 md:ml-8 m-2 md:w-1/4 cursor-pointer"><Image src="/vs.webp" alt="" width={500} height={500} />
                <h1 className="text-2xl font-medium my-4 cursor-pointer">Visual Studio 2022</h1>
                <p className='md:w-3/4 w-96 cursor-pointer'>Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games. </p>
                <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Download Visual Studio 2022{'>'}</span></div>
            </div>
            <div className="mid2 mt-14 md:ml-8 m-2 md:w-1/4 cursor-pointer"><Image src="/welcom.webp" alt="" width={500} height={500} />
                <h1 className="text-2xl font-medium my-4 cursor-pointer">Welcome to your Windows 365 Cloud PC</h1>
                <p className='md:w-3/4 w-96 cursor-pointer'>Securely stream your Windows experience from the Microsoft cloud to any device. </p>
                <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Get it ready{'>'}</span></div>
            </div>
            <div className="right mt-14 md:ml-8 m-2 md:w-1/4 cursor-pointer"><Image src="/get.webp" alt=""  width={500} height={500}/>
                <h1 className="text-2xl font-medium my-4 cursor-pointer">Get Microsoft Teams for free</h1>
                <p className='md:w-3/4 w-96 cursor-pointer'>Online meetings, chat and shared cloud storage – all in one place. </p>
                <div className='my-5 cursor-pointer'><span className='text-blue-600 font-medium text-xl'>Sign up for free trail{'>'}</span></div>
            </div>

        </div>
    </div>
}