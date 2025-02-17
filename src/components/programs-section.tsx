import ProgramCard from "./cards/program-card";
import { programs } from "../contents/main";
import TaekwondoSection from "./taekwondo";

const ProgramsSection = () => {
  return (
    <section
      className=" p-4 md:p-16 bg-blackSecondary text-white"
      id="programs"
    >
      <h1 className="text-center text-5xl font-bold pb-16">OUR PROGRAMS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 150}`}>
            <ProgramCard
              image={program.image}
              Icon={program.icon}
              title={program.title}
              description={program.description}
            />
          </div>
        ))}
      </div>
      <TaekwondoSection />
    </section>
  );
};

export default ProgramsSection;
