import Image from "next/image";
import Link from "next/link";
import { ScrollBasedVelocityDemo } from "../demos/scroll-based-velocity-demo";

const services = [
    {
        icon: "/pest/cockro.jpeg",
        title: "COCKROACHES",
        description:
            "Kill adult & juvenile roaches. Make sure juveniles can't reproduce and eggs can't hatch with reputable insect growth regulator.",
    },
    {
        icon: "/pest/ants.jpeg",
        title: "ANTS & TERMITE",
        description:
            "In nature, ants and termites are often found living close to each other. Termites and carpenter ants both like wood. Call Us!",
    },
    {
        icon: "/pest/bees.jpeg",
        title: "BEE RELOCATIONS",
        description:
            "Professional bee removal & bee relocation service. Please help us to save bees. Professional Bee movers. Safe Removal",
    },
    {
        icon: "/pest/rat.jpeg",
        title: "RATS",
        description:
            "Rats don't like the smell of peppermint, placing peppermint oil on cotton wool balls in corners of your home will help to keep them away.",
    },
    {
        icon: "/pest/cockro2.jpeg",
        title: "BED BUGS",
        description:
            "Do not try to use agricultural or garden pesticides or use products that appear to be “homemade” or “custom formulated.” Call Us!",
    },
    {
        icon: "/pest/brounants.jpeg",
        title: "WASPS",
        description:
            "Get rid of wasps with a professional wasp nest treatment service helping to keep you safe from the risk of painful wasp stings",
    },

];

const Services = () => {
    return (
        <section className=" py-[2rem]">






            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-[2rem] md:mx-[4rem]">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
                    >
                        <Image
                            src={service.icon}
                            width={10000}
                            height={10000}
                            className="object-contain bg-gray-100 p-4 w-full"
                            alt="image"
                        />
                        <h1 className="text-xl font-medium">{service.title}</h1>
                        <p className="text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>



        </section>
    );
};

export default Services;
