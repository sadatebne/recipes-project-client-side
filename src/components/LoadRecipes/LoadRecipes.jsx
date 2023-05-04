import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowRecipes from '../ShowRecipes/ShowRecipes';

const LoadRecipes = () => {
    const recipes=useLoaderData()

    // const {recipeId, recipeName, ingredients, instructions, imageURL}=recipes
    //console.log(recipes)
    return (
        <div>
            {
                recipes.map(recipe=><ShowRecipes key={recipe.recipeId} recipe={recipe}></ShowRecipes>)
            }
        </div>
    );
};

export default LoadRecipes;