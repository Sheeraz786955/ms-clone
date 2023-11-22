import Dropdown from "./Dropdown"
import Image from "next/image"
function Header(){
    return  <div className='justify-between flex items-center p-4'>
    <div className="justify-center flex items-center md:order-2">
      <div className="md:hidden ml-5"><Dropdown/></div>
      <div className="search md:hidden mx-4"><Image src="/search.svg" alt="" width={25} height={500}/></div>
    </div>
    <div className="logo text-center flex md:order-1">
      <div className='w-32 p-4 hover:cursor-pointer'><Image src="/logo.png" alt="" width={500} height={600}/></div>
      <div className="features my-3.5 md:space-x-4 hidden w-fit md:static md:w-auto bg-gray-200 md:bg-white md:flex inset-0 md:mx-4 -translate-x-96 md:translate-x-0">
        <div className="items cursor-pointer hover:underline">Microsoft365</div>
        <div className="items cursor-pointer hover:underline">Office</div>
        <div className="items cursor-pointer hover:underline">Windows</div>
        <div className="items cursor-pointer hover:underline">Surface</div>
        <div className="items cursor-pointer hover:underline">Xbox</div>
        <div className="items cursor-pointer hover:underline">Sport</div>
        
      </div>
      </div>
    <div className="cart text-center md:order-3 flex space-x-3">
    <div className="search hidden hover:cursor-pointer md:block"><Image src="/search.svg" alt="" width={25} height={60}/></div>
      <div className=''><Image className='hover:cursor-pointer' src="/cart.svg" alt="" width={25} height={500}/></div>
      <div><Image className=' hover:cursor-pointer' src="/account.svg" alt="" width={25} height={500} /></div>
      </div>
    </div>

  
}
export default Header