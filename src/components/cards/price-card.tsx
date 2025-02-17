const PriceCard = ({ price, period }: { price: string; period: string }) => {
  return (
    <div className=" bg-white space-y-6 bg-opacity-10 px-2 py-4 rounded shadow-lg shadow-gray-600 ">
      <p className=" text-lg font-semibold md:font-bold text-center text-primary hover:text-white">
        {period}
      </p>
      <p className=" text-lg font-bold text-center">{price} ETB</p>
    </div>
  );
};

export default PriceCard;
