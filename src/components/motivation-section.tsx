import motivationImage from "../assets/motivation-image.jpeg";
const MotivationSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-16 bg-blackSecondary text-white bg-opacity-95">
      <div>
        <img src={motivationImage} alt="" />
      </div>
      <div className=" space-y-6">
        <p className=" text-5xl font-semibold ">
          Get Ready To Reach Your Fitness Goals
        </p>
        <p className=" text-lg">
          Ditch the excuses, grab your motivation backpack! "Get Ready To Reach
          Your Fitness Goals" isn't just a title, it's a battle cry. This guide
          is your personal trainer, cheerleader, and goal-crushing buddy rolled
          into one. We'll break down your aspirations into bite-sized. Get ready
          to conquer your doubts, rewrite your limits, and finally claim the
          healthier, happier you!
        </p>
        <button className=" p-4 bg-primary  text-lg rounded">
          Start Today
        </button>
      </div>
    </section>
  );
};

export default MotivationSection;
