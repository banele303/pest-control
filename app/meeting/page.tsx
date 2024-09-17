"use client";


import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Navbar from "../about-us/navbar";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
     <Navbar/>
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between mt-[9rem] md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Complete Pest Elimination Solution</h1>
          <p className="text-lg text-gray-500 py-4">
          We believe that charging a call-out fee is unethical. We endeavor to provide you with pest control services that are both affordable and effective.
          </p>

          {[
                {
                  title: "Step 1",
                  description:
                    "Call us on +27 74 684 5729 or request a call-back, to receive your free no-obligation quote and advice.",
                },

                {
                  title: "Step 2",
                  description:
                    "We will confirm your appointment and send one of our experts out to you.",
                },
                {
                  title: "Step 3",
                  description:
                    "One of our professionals will get straight to resolving your issue quickly and efficiently.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <Calendly />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
