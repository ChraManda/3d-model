import SearchForm from '@/components/SearchForm'
import ModelsGrid from '@/components/ModelsGrid'

import {getModels} from '@/lib/models'

export default async function ModelsPage({searchParams}: {searchParams?: Promise<{search: string}>}){

  const search = (await searchParams)?.search?.toLowerCase() || ""
  const models = await getModels(search)
  console.log(search)

  return (
    <div>
      <SearchForm/>
      <ModelsGrid models={models}/>
    </div>
  )
}