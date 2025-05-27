import Image from "next/image";
import Container from "./Container";

const operations = [
  {
    image: "/operation-tech.jpg",
    title: "Technology Procurement and Distribution",
    description:
      "We excel in sourcing and distributing pre-owned telecommunications devices and tech gadgets, including laptops, iPhones, refurbished items, and accessories. Our primary markets are the U.S. 🇺🇸 and Canada 🇨🇦, with a strategic focus on expanding to African nations, starting with Nigeria 🇳🇬. Our mission is to democratize access to affordable technology in emerging markets.",
  },
  {
    image: "/operation-innovation.jpg",
    title: "E-commerce and Product Innovation:",
    description:
      "Our e-commerce division is dedicated to creating and marketing innovative, cost-effective products online. These high-margin offerings are crafted based on extensive market research and sold under our proprietary brand in North America, with ambitions for global outreach . We have established our presence on major e-commerce platforms such as Amazon and eBay.",
  },
  {
    image: "/operation-invest.jpg",
    title: "Strategic Investments in SBT Holding",
    description:
      "We have a significant investment in SBT Holding, a Nigerian IT support and service conglomerate with interests spanning telecommunications, biometrics, security solutions, as well as the oil, gas, and real estate sectors. Our portfolio includes SB Telecoms, ZKTECO West-Africa, Securetech, and Estate Exchange. ",
  },
  {
    image: "/operation-logistics.jpg",
    title: "Delivery and Logistics Solutions",
    description:
      "Through strategic collaborations with partners like Lyft, Car hire, Spark, and Go-Puff, we offer extensive delivery and logistics services 🚚, ensuring efficient and reliable transportation solutions.",
  },
  {
    image: "/operation-dev.jpg",
    title: "Software and Application Development",
    description:
      "Our comprehensive suite of development services includes Web Applications, Custom Solutions, Websites, Graphics, and Multimedia production. Utilizing a talented team of developers, we deliver innovative and customized technology solutions that meet a wide array of client needs",
  },
  {
    image: "/operation-trading.jpg",
    title: "Automotive Trading",
    description:
      "Our operations extend to the automotive sector, where we engage in the purchase and sale of vehicles through auctions, enhancing our diversified business model.",
  },
  {
    image: "/spark-explorer-logo.svg",
    title: "Our Flagship EdTech Platform: SparkXplorer",
    description:
      "SparkXplorer is a proprietary after-school learning and tutoring platform developed and owned by SBT Global LLC. Designed to boost academic excellence among K-12 students, the platform combines self-paced practice, unlimited tutoring access, and gamified learning rewards.",
  },
  {
    image: "/operation-expert.avif",
    title: "Expert Sourcing and Procurement",
    description:
      "We provide specialized sourcing and procurement services, catering to the needs of African businesses and consumers seeking quality products from North America",
  },
];

function Operation() {
  return (
    <Container>
      <section id="operations" className="space-y-7 px-4 py-10 lg:py-24">
        <h2 className="text-primary text-center text-xl md:text-2xl font-bold uppercase">
          Our Core Operations
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {operations.map((item, index) => (
            <li
              key={index}
              className="shadow p-4 lg:p-6 space-y-6  hover:-translate-y-2  duration-300 rounded-md"
            >
              <div className="w-full h-[200px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className=" rounded"
                />
              </div>
              <div className="space-y-1">
                <h3 className="md:text-lg uppercase font-medium text-secondary">
                  {item.title}
                </h3>
                <p className="text-primary text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default Operation;
