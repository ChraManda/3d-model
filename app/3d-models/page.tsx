import SearchForm from "@/components/SearchForm";
import ModelsGrid from "@/components/ModelsGrid";

import { getModels } from "@/lib/models";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams?: Promise<{ search: string; sort: string }>;
}) {
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const models = await getModels(search, sort);

  return (
    <div>
      <SearchForm search={search} />
      <ModelsGrid models={models} search={search} />
    </div>
  );
}
