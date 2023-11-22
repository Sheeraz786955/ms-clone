import Image from "next/image";
import Myicon from "./components/MyIcon";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Service1 from "./components/Service1";
import Mainheading from "./components/Mainheading";
import Service2 from "./components/Service2";
import Button2 from "./components/Button2";
export default function Home() {
  return (
    <main>
      <Mainheading />
      <Service1 />
      <div className="center flex flex-col-reverse bg-[#e6e6e6] md:flex-row  my-10 p-10 w-full ">
        <div className="left flex flex-col bg-[#e6e6e6] justify-center item-center md:items-baseline">
          <h1 className="text-2xl md:text-4xl font-medium mt-24 mx-5 md:ml-28">
            Outlook for iOS and Android
          </h1>
          <p className="w-80 mx-5 mt-4 md:w-96 md:mt-3">
            Connect. Organise. Get things done.
          </p>
          <div className="flex-col-reverse md:flex-row ">
            <div>
              <Button2 />
            </div>
          </div>
        </div>
        <div className="right">
          <Image  src="/mobile.jpeg" alt=""  width={500} height={500}/>
        </div>
      </div>
      <h1 className="text-4xl font-semibold mx-10">For business</h1>
      <Service2 />
      <Footer />
    </main>
  );
}
