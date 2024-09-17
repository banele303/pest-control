import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl 
       font-semibold
        max-w-8xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       Eco-Friendly Pest Control <br />  <Cover>Solution for all Spaces</Cover>
      </h1>
    </div>
  );
}
