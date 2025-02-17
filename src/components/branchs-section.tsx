import branchImg1 from "../assets/ayat-branch.jpeg";
import branchImg2 from "../assets/49-branch.jpg";
const BranchsSection = () => {
  const branches = [
    {
      id: 1,
      name: "Ayat Roundabout",
      address: "Ayat roundbout infront of Lomiyad supermarket",
      image: branchImg1,
    },
    {
      id: 2,
      name: "Tsebel 49",
      address: "Tsebel 49 condominium.",
      image: branchImg2,
    },
  ];

  return (
    <section className="p-8 md:p-16 bg-blackSecondary text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        OUR BRANCHES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[80%] mx-auto">
        {branches.map((branch) => (
          <div
            key={branch.id}
            data-aos="zoom-out"
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="w-full h-60 object-cover object-top" // Add object-top here
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{branch.name}</h2>
              <p className="text-gray-300">{branch.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchsSection;
