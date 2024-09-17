import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "./footar";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";

const Showcase = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >

<Navbar/>







      <section className="md:px-0 pt-[4rem] mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Eco Pest Control"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500">
         The best pest expects in SA
        </p>




<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-[3rem]">
        <div className="max-auto  ">
          <h3
            className="
           text-2xl md:text-4xl my-6 md:my-10  font-extrabold text-blue-300">

            Why Choose US
          </h3>
          <h3
            className="
           text-xl md:text-xl my-6 md:my-10  text-bold text-gray-500"
          >
           Safely Eliminating pests
          </h3>
          <p
            className="
           text-xl md:text-xl my-6 md:my-10  text-gray-500"
          >
           Here at Eco Pest Control we take pride in our pest management and prevention strategies, which are tailored to each customer&apos;s specific requirements.
           We offer our services throughout the Gauteng Metropolitan Area and surrounding communities, from personal houses to business owners. Our elimination process is completely safe for your family and household pets.
          
          <br/>
          <br/>
          Customer satisfaction and client relationships are important to our team. Our pest control experts are people you can trust and rely on.
We are highly specialised in what we do, and we can handle even the most difficult infestations.
          </p>

          <Link
            href="/meeting"
            className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      roundend-[4x]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            About Us
          </Link>
        </div>
        <div className="mx-auto pt-[8rem]">
          <Image
            src={"/pest/bees.jpeg"}
            width={10000}
            height={10000}
            className="md:w-3/4"
            alt="image"
          />
        </div>
      </section>





        <BlurFadeDemo />

        <LetsMakeThingsHappenSection />


      </section>

     <Footer/>
    </div>
  );
};

export default Showcase;
