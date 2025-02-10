import PriceCard from "./cards/price-card";

const PriceSection = () => {
  return (
    <section
      className=" p-8 md:p-16 bg-blackSecondary space-y-16 text-white"
      id="prices"
    >
      <h1 className=" text-5xl font-bold text-center">Our Pricing</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          data-aos="flip-left"
          data-aos-duration="1000" // Flip duration for the first card
          data-aos-delay="0"
        >
          <PriceCard period="ONE MONTH" price="3000" />
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="1200" // Flip duration for the second card (slightly slower)
          data-aos-delay="200" // Delay to stagger the animations
        >
          <PriceCard period="THREE MONTH" price="700" />
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="1400" // Flip duration for the third card (even slower)
          data-aos-delay="400" // Delay to stagger the animations
        >
          <PriceCard period="SIX MONTH" price="16000" />
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="1600" // Flip duration for the fourth card (slowest)
          data-aos-delay="600" // Delay to stagger the animations
        >
          <PriceCard period="ONE YEAR" price="32000" />
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
