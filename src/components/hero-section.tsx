import bgImage from "../assets/hero-background.jpg";
const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[600px] p-8 md:p-24"
    >
      <div className=" text-white space-y-6 md:w-[50%]">
        <p
          data-aos="fade-right"
          data-aos-delay="300"
          className=" text-5xl md:text-7xl font-bold "
        >
          Build Your Body <br />{" "}
          <span className=" text-primary">Transform</span> Your Life
        </p>{" "}
        <p data-aos="fade-left" data-aos-delay="600" className=" text-xl pb-6">
          Empower your journey to peak fitness. Build a stronger body and
          transform your life with our expert guidance and support.
        </p>
        <a href="#contact-us" className="">
          <button
            data-aos="fade-right"
            data-aos-delay="900"
            className=" p-4 bg-primary  text-lg rounded"
          >
            Start Today
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
