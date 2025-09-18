type PillarCardProps = {
  title: string;
  desc: string;
};

export default function PillarCard({ title, desc }: PillarCardProps) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
