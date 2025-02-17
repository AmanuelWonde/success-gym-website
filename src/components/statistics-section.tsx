import { stat } from "../contents/main";
import StatisticsCard from "./cards/statistics-card";

export const StatisticsSection = () => {
  return (
    <section className=" bg-blackSecondary p-8">
      {" "}
      <div className=" md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stat.map((item) => (
          <StatisticsCard info={item.info} stat={item.stat} />
        ))}
      </div>
    </section>
  );
};
