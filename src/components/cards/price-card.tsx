import { CheckIcon } from "lucide-react";

const PriceCard = ({ price, period }: { price: string; period: string }) => {
  return (
    <div className=" bg-white space-y-6 bg-opacity-10 p-8 rounded shadow-lg shadow-gray-600">
      <p className=" text-2xl font-bold text-center text-primary hover:text-white">
        {period}
      </p>
      <p className=" text-xl font-bold text-center">{price} ETB</p>
      <ul className=" space-y-4">
        <li className="flex gap-3">
          <CheckIcon className="text-primary" />
          <p>
            Access to a fully equipped gym with top-quality machines and weights
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
  );
};

export default PriceCard;
