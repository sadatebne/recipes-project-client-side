import React from 'react';
import { Container } from 'react-bootstrap';


const ShowRecipes = ({ recipe }) => {

    const { recipeId, recipeName, ingredients, instructions, imageURL } = recipe
    //console.log(recipe)
    return (
        <Container>
            <div className='d-flex flex-column flex-md-row gap-4 mt-4'>
                <div>
                    <img src={imageURL} alt="" style={{ height: '300px', width: '350px' }} />
                </div>
                <div>
                   <h2>Recipe Name: {recipeName}</h2>
                   <h3>Recipe Id: {recipeId}</h3>
                   <p>Ingredients: {ingredients}</p>
                   <p>Instructions: {instructions}</p>
                </div>
            </div>
        </Container>
    );
};

export default ShowRecipes;