import taekwondoImg1 from "../assets/taekwondo/taekwondo-1.jpg";
import taekwondoImg2 from "../assets/taekwondo/taekwondo-2.jpg";
import taekwondoImg3 from "../assets/taekwondo/taekwondo-3.jpg";
import taekwondoImg4 from "../assets/taekwondo/taekwondo-4.jpg";
const TaekwondoSection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      <h1 className=" text-xl font-bold md:hidden">TAEKWONDO CLASS</h1>
      <div className=" grid gap-2 grid-cols-2">
        <img
          data-aos="fade-right"
          data-aos-delay="150"
          src={taekwondoImg1}
          alt=""
          className=" w-[400px] h-[200px]   object-cover rounded-md"
        />
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          src={taekwondoImg2}
          alt=""
          className=" w-[400px] h-[200px] object-cover rounded-md"
        />
        <img
          src={taekwondoImg3}
          data-aos="fade-right"
          data-aos-delay="600"
          alt=""
          className=" w-[400px] h-[200px] object-cover rounded-md"
        />
        <img
          src={taekwondoImg4}
          data-aos-delay="1200"
          data-aos="fade-left"
          alt=""
          className=" w-[400px] h-[200px] object-cover rounded-md"
        />
      </div>{" "}
      <div
        className=" flex flex-col gap-4 justify-center"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h1 className=" text-xl font-bold hidden md:block">TAEKWONDO CLASS</h1>
        <p className=" text-gray-200">
          At Success Gym, we offer expert-led Taekwondo classes designed
          specifically for children. Our program helps kids build discipline,
          confidence, and self-defense skills in a fun and supportive
          environment. Through structured training, they develop strength,
          focus, and respect while staying active and engaged. Join us to
          empower your child with the skills and mindset of a true martial
          artist!
        </p>
      </div>
    </section>
  );
};

export default TaekwondoSection;
