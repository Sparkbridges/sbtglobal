import Image from "next/image";
import bg from "@/public/hero.jpg";

function Hero() {
  return (
    <section className="h-screen relative grid place-content-center text-center">
      <Image src={bg} fill placeholder="blur" quality={80} alt="solar system" />

      <div className="relative z-20 text-white space-y-2">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase font-extrabold text-slate-100">
          SBT Global
        </h1>
        <p className="text-xs w-64 sm:text-base lg:text-lg sm:w-full sm:max-w-md mx-auto font-medium ">
          Connecting Markets, Empowering Individuals, Fostering Global
          Development
        </p>
      </div>
    </section>
  );
}

export default Hero;
