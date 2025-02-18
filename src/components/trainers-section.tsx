import TrainerCard from "./cards/trainer-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { trainers } from "../contents/main";

const TrainersSection = () => {
  const [emblaRef, _emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section
      className=" p-8 md:p-16 bg-blackSecondary bg-opacity-95 space-y-16 text-white"
      id="trainers"
    >
      <h1 className=" text-5xl font-bold text-center">Our Trainers</h1>
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className=" flex">
          {trainers.map((trainer) => (
            <div className=" min-w-0 flex-none w-full pt-20 flex justify-center">
              <TrainerCard
                name={trainer.name}
                about={trainer.about}
                image={trainer.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
