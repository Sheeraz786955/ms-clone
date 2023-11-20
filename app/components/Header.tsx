function Header(){
    return  <div className='justify-between flex items-center p-4'>
    <div className="justify-center flex items-center md:order-2">
      <div className='inline-block cursor-pointer p-4 md:hidden'>
        <div className='h-0.5 w-6 my-1 bg-black'></div>
        <div className='h-0.5 w-6 my-1 bg-black'></div>
        <div className='h-0.5 w-6 my-1 bg-black'></div>
      </div>
      <div className="search md:hidden"><img className='w-5' src="search.svg" alt="" /></div>
    </div>
    <div className="logo text-center flex md:order-1">
      <div className='w-32 p-4'><img src="logo.png" alt="" /></div>
      <div className="features my-3 md:space-x-3 absolute w-fit md:static md:w-auto bg-gray-200 md:bg-white md:flex inset-0 md:mx-4 -translate-x-96 md:translate-x-0">
        <div className="items cursor-pointer">Microsoft365</div>
        <div className="items cursor-pointer">Office</div>
        <div className="items cursor-pointer">Windows</div>
        <div className="items cursor-pointer" cursor-pointer>Surface</div>
        <div className="items cursor-pointer">Xbox</div>
        <div className="items cursor-pointer">Sport</div>
        
      </div>
      </div>
    <div className="cart text-center md:order-3 flex space-x-3">
    <div className="search hidden md:block"><img className='w-5' src="search.svg" alt="" /></div>
      <div className=''><img className='w-5' src="cart.svg" alt="" /></div>
      <div><img className='w-5' src="account.svg" alt="" /></div>
      </div>
    </div>

  
}
export default Header