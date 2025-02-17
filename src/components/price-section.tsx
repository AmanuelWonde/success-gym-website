import { CheckIcon } from "lucide-react";
import PriceCard from "./cards/price-card";
import { ayatBranchPrice, tsebelBranchPrice } from "../contents/price";

const PriceSection = () => {
  return (
    <section
      className=" p-8 md:p-16 bg-blackSecondary space-y-16 text-white"
      id="prices"
    >
      <h1 className=" text-5xl font-bold text-center">Our Pricing</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" flex flex-col w-full justify-center items-center">
          <h3 className=" text-lg font-bold pb-6">Our Pricing Includes</h3>
          <ul className=" space-y-4">
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>
                Access to a fully equipped gym with top-quality machines and
                weights
              </p>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>Unlimited gym access 7 days a week</p>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>Guidance from experienced and certified trainers</p>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>Relaxing steam room access for post-workout recovery</p>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>Clean and hygienic shower facilities</p>
            </li>
            <li className="flex gap-3">
              <CheckIcon className="text-primary" />
              <p>Aerobics classes available 3 days a week</p>
            </li>
          </ul>
        </div>

        <div className=" grid grid-rows-1 gap-8">
          <div>
            <p className=" text-xl font-bold p-6">Ayat Brach Price</p>

            <div className=" grid grid-cols-2 gap-6 ">
              {ayatBranchPrice.map((item, index) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration={`${index * 1000}`} // Flip duration for the first card
                  data-aos-delay={`${index * 200}`}
                >
                  <PriceCard period={item.period} price={item.price} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold p-6">Tsebel 49 Branch Price</p>

            <div className=" grid grid-cols-2 gap-6 ">
              {tsebelBranchPrice.map((item, index) => (
                <div
                  data-aos="flip-left"
                  data-aos-duration={`${index * 1000}`} // Flip duration for the first card
                  data-aos-delay={`${index * 200}`}
                >
                  <PriceCard period={item.period} price={item.price} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
