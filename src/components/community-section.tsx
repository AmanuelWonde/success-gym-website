import communityImg from "../assets/community/community.jpg";
const CommunitySection = () => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      <h1 className=" text-xl font-bold md:hidden">SUPPORTIVE COMMUNITY</h1>
      <img
        data-aos="fade-up"
        data-aos-delay="150"
        src={communityImg}
        alt=""
        className="  object-cover rounded-md"
      />
      <div
        className=" flex flex-col gap-4 justify-center"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h1 className="text-xl font-bold hidden md:block">
          SUPPORTIVE COMMUNITY
        </h1>
        <p className="text-gray-200">
          At Success Gym, we believe in the power of community to uplift and
          motivate each other. Our supportive environment fosters growth, where
          members encourage and push one another to reach their goals. Whether
          you're a beginner or an experienced athlete, you'll find a welcoming
          space filled with positive energy. Together, we celebrate progress,
          overcome challenges, and build a healthier, stronger future.
        </p>
      </div>
    </section>
  );
};

export default CommunitySection;
