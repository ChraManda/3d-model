import ModelsGrid from '@/components/ModelsGrid'
import {getModelsByCategorySlug} from '@/lib/models'

/*  
CHALLENGE - Use the dynamic route param to load the correct category models.  
  
1. Type the `params` prop (which is a Promise) so it contains:  
- categorySlug: string  
  
2. Await `params` and destructure the `categorySlug`.  
  
3. Use `getModelsByCategorySlug()` to get the models for that category.  
  
4. Pass the result into `ModelsGrid`.  
   
DOCS: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
*/
type CategorySlug = {
    categorySlug: string
}
export default async function CategoryPage({params}:{params: Promise<CategorySlug>}){
    const {categorySlug} = await params
    const models = await getModelsByCategorySlug(categorySlug)
  return (
    <ModelsGrid models={models}/>
  )
}