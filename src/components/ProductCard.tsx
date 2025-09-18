type ProductCardProps = {
  title: string;
  desc: string;
  image: string;
};

export default function ProductCard({ title, desc, image }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
