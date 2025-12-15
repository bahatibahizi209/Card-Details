import { useEffect, useState } from "react";
import { recipeApi,transformRecipe } from "../../services/recipeApi";
export const useRecipe=()=>{
    const [recipes,setRecipes]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const fetchRandomRecipes = async ()=>{
        try {
            setLoading(true);
            setError(null);

            const apiRecipe =await recipeApi.getRandomRecipes(8);
            const transformedRecipes=apiRecipe.map(transformRecipe).filter(Boolean);
            setRecipes(transformedRecipes);
        } catch (error) {
            setError('failed to fetch recipes');
            console.error('Error fetching recipes:',error)
        }finally{
            setLoading(false)
        }
    }
    const searchRecipes=async (searchTerm) => {
        if(!searchTerm.trim()){
            await fetchRandomRecipes();
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const apiRecipes=await recipeApi.searchByName(searchTerm);
            const transformedRecipes=apiRecipe.map(transformRecipe).filter(Boolean);
            setRecipes(transformedRecipes);
        } catch (error) {
             setError('failed to fetch recipes');
             console.error('Error fetching recipes:',error)
        }finally{
            setLoading(false)
        }
    }
     const fetchRecipeByCategory= async (category) => {
        try {
            setLoading(true);
            setError(null);
            const apiRecipes=await recipeApi.getByCategory(category);
            const detailedRecipes=await Promise.all(apiRecipes.slice(0,8).map(async(recipe)=>{
            const detailed=await recipeApi.getRecipeById(recipe.idMeal);
            return transformRecipe(detailed);
            }));
            setRecipes(detailedRecipes.filter(Boolean));
        } catch (error) {
             setError('failed to fetch recipes');
             console.error('Error fetching recipes:',error)
        }finally{
            setLoading(false)
        }
        }
   useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
    searchRecipes,
    fetchRecipeByCategory,
    refetch: fetchRandomRecipes,
  };
};
