import { getAllModels } from "@/lib/models";
import type { Model } from "@/types"
export default async function () {
  const models: Model[] = await getAllModels();
  return models.map(model => <p key={model.id}>{model.name}</p>)
}
