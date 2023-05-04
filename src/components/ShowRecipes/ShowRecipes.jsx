import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';


const ShowRecipes = ({ recipe }) => {

    const [fav, setFav]=useState(false)

    const handleFav=()=>{
        setFav((fav)=>!fav)
        toast("Wow so it's your favorite recipe !");
    }

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
                    <Button onClick={handleFav} variant="outline-success" disabled={fav} >Favorite <FontAwesomeIcon icon={faHeart} beat size="lg" style={{color: "#ff0000",}} />
                    </Button>

                </div>
            </div>
        </Container>
    );
};

export default ShowRecipes;