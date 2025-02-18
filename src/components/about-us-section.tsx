import "react-photo-album/rows.css";
import img1 from "../assets/about-us/bini-img-1.jpg";
import img2 from "../assets/about-us/bini-img-2.jpg";
import img3 from "../assets/about-us/bini-img-3.jpg";

const AboutUsSection = () => {
  return (
    <section
      className=" p-4 md:p-16 text-white bg-blackSecondary bg-opacity-95 space-y-16"
      id="about-us"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center md:hidden">
        ABOUT US
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className=" flex  gap-2 flex-col md:flex-row items-center w-full">
          <img src={img1} alt="" className=" md:w-72 rounded " />
          <div className=" flex md:flex-col flex-row gap-2 h-full">
            <img
              src={img2}
              alt=""
              className=" w-[400px] h-[200px] md:h-[250px] object-cover rounded"
            />
            <img
              src={img3}
              alt=""
              className=" w-[400px] h-[200px] md:h-[250px] object-cover rounded"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold  hidden md:block">
            ABOUT US
          </h1>

          <p className=" text-gray-200">
            Success Gym has been transforming lives for over ten years, helping
            thousands achieve their fitness goals. Founded by the young and
            energetic Biniyam Nega, the gym overcame many challenges to become a
            symbol of dedication and excellence. With hard work and
            perseverance, Biniyam successfully expanded, opening two thriving
            branches at Ayat Roundabout and Tsebel 49. Success Gym continues to
            inspire the community with top-tier training and a commitment to
            health and wellness. Today, it stands as a testament to passion,
            resilience, and the power of fitness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
