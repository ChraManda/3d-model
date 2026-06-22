import SearchForm from '@/components/SearchForm'
import ModelsGrid from '@/components/ModelsGrid'

import {getModels} from '@/lib/models'

export default async function ModelsPage(){

  const models = await getModels()

  return (
    <div>
      <SearchForm/>
      <ModelsGrid models={models}/>
    </div>
  )
}