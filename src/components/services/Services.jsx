import React from "react";
import Img2 from "../../assets/coffee2.png";


const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "SereniTea Natural Green Tea",
    description:
      "Known to offer Health Benifits with mild, grassy flavour. It's freshness provides a perfect soothing cup any time of the day.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "SereniTea Natural Black Tea ",
    description:
      "Known to offer Brisk with malty delightful flavour. Rich in antioxidants, SereniTea Natural Black Tea help to boost heart health.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "SereniTea Bliss By Dawn",
    description:
      "known to offer calm mental energy with authenticity and premium quality. Experience the Royal feeling from the gardens of Assam.",
    aosDelay: "500",
  },
];


const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-white">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-green-900">
              We Serve the best Tea in the city
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white  hover:text-black relative shadow-xl duration-high group max-w-[300px] "
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;