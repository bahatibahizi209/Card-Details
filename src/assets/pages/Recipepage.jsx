import { RefreshCcw } from "lucide-react";
import FilterBar from "../../components/FilterBar";
import RecipeGrid from "../../components/RecipeGrid";
import RecipeModel from "../../components/RecipeModel";
import { useRecipe } from "../hooks/UseRecipe";
import { useMemo, useState } from "react";

export default function Recipepage() {
  const [searchTerm,setSearchTerm]=useState("");
  const [maxPrepTime,setMaxPrepTime]=useState(30);
  const [maxCookTime,setMaxCookTime]=useState(30);
  const [selectedCategory,setSelectedCategory]=useState("");
  const [selectedRecipe,setSelectedRecipe]=useState(null);
  const [isModelOpen,setIsModelOpen]=useState(false);
  const {
  recipes,
  loading,
  error,
  searchRecipes,
  fetchRecipeByCategory,
  refetch:fetchRandomRecipes
  }=useRecipe();
  const filteredRecipes=useMemo(()=>{
    return recipes.filter((recipe)=>{
    const matchesPrepTime=recipe.prepTime <= maxPrepTime;
    const matchCookTime=recipe.cookTime <= maxCookTime;
    return matchesPrepTime && matchCookTime;
    })
  },[recipes,maxPrepTime,maxCookTime])
      return (
        <div className="min-h-screen bg-light-neutral-200">
          <div className="container mx-auto px-4 py-12 text-center">
           <h1 className="text-5xl lg:text-5xl font-semibold text-primary mb-6">
        Explore Our<span> Healthy & Simple</span> Recipes</h1> 
        <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
        Discover nutritious recipes from around the world that fit your busy lifestyle.
        Search by name,ingredient or explore by category find your next favorite dish!  
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>

          {/* conditional rendering */}
           {/* <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl 
          inline-block">
            <p className="text-red-600">Error</p>
            <button className="mt-4 inline-flex items-center px-6 py-3
            bg-orange-400 text-white rounded-xl hover:bg-orange-400
            transition-all duration-300 font-semibold">
              <RefreshCcw  classname="w-4 h-4 mr-2"/>
            </button>
          </div> */}
        <div className="py-6">
          <div className="container mx-auto px-4">
            <FilterBar/>
          </div>
        </div>
        <div className="contianer mx-auto px-4 py-12">
        <RecipeGrid/>
          </div> 
        </div>
        {/* <RecipeModel/> */}
    </div>
      )
    }
    