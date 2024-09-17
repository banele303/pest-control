"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Services from "@/components/2ui/services";
import Navbar from "./about-us/navbar";


const services = [
  {
    icon: "/pest/freeco.png",
    title: " ECO FRIENDLY TECHNOLOGIES ",
    description:
      "Eco friendly technologies is also used to describe a class of electronic devices that can promote and help to pest control",
  },
  {
    icon: "/pest/homico.png",
    title: "FREE HOME INSPECTION",
    description:
      "A home inspection is a limited, non-invasive examination of the condition of a home, often in connection with the sale",
  },
  {
    icon: "/pest/manico.png",
    title: "PROFESSIONAL & PROTECTED",
    description:
      "We have a great, professional and high-quality team, our trained staff will protect your home and family against any pests",
  },
  {
    icon: "/pest/homico.png",
    title: "FAST PEST REMOVAL",
    description:
      "We are the company for safe pest removal. We know all about dangerous insect and provide insects control treatments",
  },

];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Navbar/>

      <main className="md:pb-10 pt-[5rem] md:pt-[15rem]">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-[2rem]">
          <AnimatedShinyTextDemo />

<div className="">

          <h1>
            <CoverDemo />
          </h1>
         
</div>
        
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your pests proplem and get a quote in
            minutes
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
              text-[16px]
            px-5
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Get A Quote
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
                text-[16px]
   py-3 
  px-5 
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Call Now
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                COCKROACHES
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                ANTS & TERMITE
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                RATS
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                BED BUGS
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by South Africans
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={50} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/pest/mosk.png",
                    name: "Logo",
                  },
                  {
                    logo: "/pest/mosk.png",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>











      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-[3rem]">
        <div className="max-auto mx-[2rem] md:ml-[4rem]">
          <h3
            className="
           text-2xl md:text-4xl my-6 md:my-10  font-extrabold text-blue-300">

            Why Choose US
          </h3>
          <h3
            className="
           text-xl md:text-xl my-6 md:my-10  text-bold text-gray-500"
          >
            We specialises in providing environmentally friendly pest control and bird proofing solutions for both domestic and commercial environments
          </h3>
          <p
            className="
           text-xl md:text-xl my-6 md:my-10  text-gray-500"
          >
            Our expertise lies in delivering a high level of pest management, creating pest-free environments conducive to comfortable living and peak performance. By eliminating diseases associated with pests, we ensure that residents can live comfortably and employees can perform at their optimum level.
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
        <div className="mx-auto pt-[5rem]">
          <Image
            src={"/pest/secondsect.png"}
            width={10000}
            height={10000}
            className="md:w-3/4"
            alt="image"
          />
        </div>
      </section>













      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-[2rem]">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">

            Trusted. Experienced. Dedicated
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-10 md:mx-[-2rem]">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-3   p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain  p-4 w-full h-[7rem] rounded-md"
                  alt="image"
                />
                <h1 className="text-[16px]  text-center pt-[-1.4rem]">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-[2rem]  md:mx-auto">
          <h1 className="text-xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            PEST
            <span className="text-blue-500 flex gap-x-1 items-center">
             
              CONTROL 
             
            </span>
            & EXTERMINATION
          </h1>

          <p className="
          py-4  mx-auto 
          text-xl md:text-xl text-gray-500  md:mx-[4rem]">
            The identification of insects and other pests by
            phone or email it is very hard. Need to know what kind of
            bug or rodents are in your house? Here are some tips to keep
            in mind when trying to identify a pest.
          </p>
          <Services />


        </main>
      </Element>

      




       

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">519-200-5000</p>
          <p className="text-left  text-xl  text-gray-500">
            admin@birdsoftware.ca
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Bird. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
