import { Clock, X } from "lucide-react"

function RecipeModel({recipes,isOpen,onClose}) {
  if(!isOpen || !recipes) return null
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex
    items-center justify-center p-4 z-50 hover:cursor-pointer" >
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
    <div className="relative">
        <img src={recipes.image} alt="" className="w-full h-64 object-cover rounded-t-2xl"/>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm
        rounded-full hover:bg-white transition-all duration-200"
        onClick={onClose}>
        <X className="h-5 w-5 text-gray-600 hover:cursor-pointer"/>
        </button>
    </div>
    <div className="p-8">
    <div className="mb-6">
    <h2 className="text-3xl font-bold text-gray-800
    mb-2">{recipes.title}</h2>
    <p className="text-gray-600">{recipes.description}</p>
    </div>
    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50
    rounded-xl">
    <div className="text-center">
    <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
    <p className="text-sm text-gray-600">Prep Time</p>
    <p className="text-sm text-gray-800 font-semibold">{recipes.prepTime} min</p>
    </div>
    <div className="text-center">
    <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
    <p className="text-sm text-gray-600">Cook Time</p>
    <p className="text-sm text-gray-800 font-semibold">{recipes.cookTime} min</p>
    </div>
    <div className="text-center">
    <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
    <p className="text-sm text-gray-600">Servings</p>
    <p className="text-sm text-gray-800 font-semibold">{recipes.servings}</p>
    </div>
    </div>
    <div className="grid lg:grid-cols-2 gap-8">
    <div className="">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
    <div className="space-y-3">
    {/* use map method */}
    {recipes.ingredients.map((ingr,index)=>
     <div className="flex items-start space-x-3">
    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
    <span className="text-gray-700">{ingr}</span>
    </div>
    )}
    </div>
    </div>

    <div className="">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
    {/* use map method */}
    {recipes.instructions.map((instr,indx)=>
    <div className="flex items-start space-x-4">
    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center
    justify-center text-sm font-semibold flex-shrink-0">{indx +1}
    </div>
    <p className="text-gray-700 leading-relaxed">{instr}</p>
    </div>
    )}
    </div>
    </div>  
    <div className="mt-8 pt-8 border-t border-gray-200">
    <h4 className="text-lg font-semibold text-gray-800 mb-3">Tags</h4>
    <div className="flex flex-wrap gap-2">
    {/* use map method */}
    {recipes.tags.map((tags)=>
    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm
    font-medium rounded-full">#{tags}</span>
    )}
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RecipeModel
