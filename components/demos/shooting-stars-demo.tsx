import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";

import { Avatar } from "../ui/avatar";
import { AvatarDemo } from "@/app/about-us/avatar";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description:
      "1-2 weeks delivery for most projects. Call us for more information.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Development",
    description:
      "We design and develop your website with the latest technologies and trends.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalability + Maintenance ",
    description: "We offer maintenance and scalability for all websites.",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Building",
    description:
      "Safe and secure building practices. To ensure your data is safe.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },

  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Websites",
    description: "We build dynamic solutions that are easy to manage.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
       what Our Clients Are saying
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div
              className="
                    
                     animate-shine flex  rounded-md "
            >
            <AvatarDemo/>
            <div className="flex items-center gap-x-1 pl-8">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>
            </div>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
