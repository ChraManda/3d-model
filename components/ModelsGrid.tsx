import ModelCard from "@/components/ModelCard";

type Models = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export default function ModelsGrid({ models }: { models: Models[] }) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">3D Models</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models?.map((model) => {
          return <ModelCard key={model.id} />;
        })}
      </div>
    </div>
  );
}
