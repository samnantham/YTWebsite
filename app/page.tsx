import Slider from "@/components/Slider";
import GridCard from "@/components/GridCard";

const gridElements = [
  {
    title: "Home Grid Element 1",
    description: "High quality solutions designed for performance.",
    image: "/assets/grid/1.jpg",
  },
  {
    title: "Home Grid Element 2",
    description: "Reliable and scalable services for your business.",
    image: "/assets/grid/2.jpg",
  },
  {
    title: "Home Grid Element 3",
    description: "Innovative technology with future-ready design.",
    image: "/assets/grid/3.jpg",
  },
  {
    title: "Home Grid Element 4",
    description: "Designed to deliver maximum efficiency.",
    image: "/assets/grid/4.jpg",
  },
  {
    title: "Home Grid Element 5",
    description: "Built with quality, reliability, and innovation.",
    image: "/assets/grid/5.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">

      {/* FULL WIDTH SLIDER */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <Slider />
      </div>

      {/* GRID ELEMENTS SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          {/* ROW 1 — 3 ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridElements.slice(0, 3).map((item, index) => (
              <GridCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>

          {/* ROW 2 — 2 ITEMS CENTERED */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {gridElements.slice(3).map((item, index) => (
                <GridCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
