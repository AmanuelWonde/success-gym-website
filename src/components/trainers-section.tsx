import TrainerCard from "./cards/trainer-card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import trainerBiniImage from "../assets/trainers/bini.jpg";
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
          <div className=" min-w-0 flex-none w-full pt-20 flex justify-center">
            <TrainerCard
              name="Biniyam Nega"
              about="Biniyam Nega, a highly experienced gym trainer with 10 years of expertise, has transformed hundreds of lives through personalized fitness programs. He has worked alongside international trainers, bringing global techniques to his training methods. 💪🔥"
              image={trainerBiniImage}
            />
          </div>
          <div className=" min-w-0 flex-none w-full pt-16 flex justify-center">
            <TrainerCard
              name="Biniyam Nega"
              about="Biniyam Nega, a highly experienced gym trainer with 10 years of expertise, has transformed hundreds of lives through personalized fitness programs. He has worked alongside international trainers, bringing global techniques to his training methods. 💪🔥"
              image={trainerBiniImage}
            />
          </div>
          <div className=" min-w-0 flex-none w-full pt-16 flex justify-center">
            <TrainerCard
              name="Biniyam Nega"
              about="Biniyam Nega, a highly experienced gym trainer with 10 years of expertise, has transformed hundreds of lives through personalized fitness programs. He has worked alongside international trainers, bringing global techniques to his training methods. 💪🔥"
              image={trainerBiniImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
