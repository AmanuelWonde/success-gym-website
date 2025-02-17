import OurQualitiesCard from "./cards/our-qualities-card";
import gymImage1 from "../assets/gallery/photo_2025-02-17_14-23-41.jpg";
import gymImage2 from "../assets/gym-image-2.jpg";
import gymImage3 from "../assets/gym-image-3.jpg";
import gymImage4 from "../assets/gym-image-4.jpg";

import { qualities } from "../contents/main";
import CommunitySection from "./community-section";
const OurQualitiesSection = () => {
  return (
    <section
      className=" p-8 md:p-16 text-white bg-blackSecondary bg-opacity-95 space-y-16"
      id="why-choose-us"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        WHY CHOOSE US
      </h1>
      <div className=" w-full md:flex md:flex-row-reverse justify-between">
        <div className=" grid gap-2 grid-cols-2">
          <img
            data-aos="fade-right"
            data-aos-delay="150"
            src={gymImage1}
            alt=""
            className=" w-[400px] h-[200px]   object-cover rounded-md"
          />
          <img
            data-aos="fade-left"
            data-aos-delay="300"
            src={gymImage2}
            alt=""
            className=" w-[400px] h-[200px] object-cover rounded-md"
          />
          <img
            src={gymImage3}
            data-aos="fade-right"
            data-aos-delay="600"
            alt=""
            className=" w-[400px] h-[200px] object-cover rounded-md"
          />
          <img
            src={gymImage4}
            data-aos-delay="1200"
            data-aos="fade-left"
            alt=""
            className=" w-[400px] h-[200px] object-cover rounded-md"
          />
        </div>
        <div className=" md:w-[50%] flex flex-col gap-10 pt-12 md:pt-0">
          {qualities.map((quality, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternate between fade-left and fade-right
              data-aos-delay={`${index * 200}`} // Add delay to stagger the animations
            >
              <OurQualitiesCard
                title={quality.title}
                description={quality.description}
              />
            </div>
          ))}
        </div>
      </div>
      <CommunitySection />
    </section>
  );
};

export default OurQualitiesSection;
