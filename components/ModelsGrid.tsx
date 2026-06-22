import ModelCard from "@/components/ModelCard";
import SortControls from "./SortControl";

type Models = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export default function ModelsGrid({
  models,
  categoryName,
  search,
}: {
  models: Models[];
  categoryName?: string;
  search?: string;
}) {
  let title = "3D Models";
  if (categoryName) title = categoryName;
  if (search) title = `Search results for "${search}"`;
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <SortControls/>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models?.map((model) => {
          return <ModelCard key={model.id} model={model} />;
        })}
      </div>
    </div>
  );
}
