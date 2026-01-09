type GridCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function GridCard({ title, description, image }: GridCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      
      {/* IMAGE */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex h-25 flex-col justify-center p-6 bg-[#4a4a4a]">
        <h3 className="mb-2 text-xl font-bold text-[#f06500] drop-shadow-md">
          {title}
        </h3>
        <p className="font-semibold text-[#fff] drop-shadow-sm">
          {description}
        </p>
      </div>

    </div>
  );
}
