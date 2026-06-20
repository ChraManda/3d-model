import ModelCard from '@/components/ModelCard'

export default function ModelsGrid(){
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">3D Models</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ModelCard/>
      </div>
    </div>
  )
}