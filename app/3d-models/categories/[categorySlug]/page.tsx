import ModelsGrid from "@/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";

type CategorySlugProps = {
  categorySlug: string;
};
type Category = {
  slug: string;
  name: string;
};
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<CategorySlugProps>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { categorySlug } = await params;
  const sort = (await searchParams).sort?.toLowerCase() || ''
  const models = await getModelsByCategorySlug(categorySlug, sort);
  const category: Category[] = await getCategoryBySlug(categorySlug);
  return <ModelsGrid models={models} categoryName={category[0].name} />;
}
